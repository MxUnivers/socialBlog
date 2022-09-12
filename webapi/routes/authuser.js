
const bcrypt = require("bcrypt");
const router = require("express").Router();
const dotenv = require("dotenv");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { ForgetPassword, htmlText, SendCode } = require("../helper/email");
const User = require("../Models/User");
const { json } = require("body-parser");

dotenv.config();



// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        var validate = await bcrypt.compare(req.body.password, user.password);
        if (!validate) {
            res.status(403).json({ error: true, text: "Mot de passe incorrect" });
        } else {

            user.token = jwt.sign({ _id: `${user._id}` }, process.env.TWT_SCRIPT);
            user.status = "active";
            user.save();
            
            console.log(validate)
            res.status(203).json(user);
        }
    } catch (error) {
        res.status(504).json({ error: true, text: error.message });
    }
});


// LOGIN
router.post('/disconnect/:id', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.id   });
        user.status = "trash";
        user.save();
        res.status(203).json(user);        
    } catch (error) {
        res.status(504).json({ error: true, text: error.message });
    }
});



// FORGET PASSWORD
router.post('/forget-password', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        res.status(202).json(user);
        ForgetPassword(req.body.email, "Mot de passe oublié", htmlText);
    } catch (error) {
        res.status(504).json({ error: true, text: error.message });
    }
});


// VERIFY CODE
router.post("/create-code/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email });
        user.VerifyPass = crypto.randomBytes(4).toString("hex").toLocaleUpperCase();
        user.save();
        res.status(201).json(user);
        SendCode(req.params.email, "Code de rénitialisation de mot de passe", `<div style="font-size:'30px'; font-weigth:700">${user.VerifyPass}</div>`)
    } catch (error) {
        res.status(501).json({ error: true, text: error.message });
    }
})



// VERIFY CODE
router.post("/verify-token/:email", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.params.email, VerifyPass: req.body.VerifyPass });
        res.status(201).json(user);
    } catch (error) {
        res.status(501).json({ error: true, text: error.message });
    }
});

// NEW PASSWORD
router.post("/new-password/:email", async (req, res) => {
    try {
        const user = await User.findOneAndUpdate({ email: req.params.email, password: req.body.password });
        res.status(201).json(user);
    } catch (error) {
        res.status(501).json({ error: true, text: error.message });
    }
});




module.exports = router;  