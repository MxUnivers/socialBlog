const router = require('express').Router();
const User = require('../Models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config()

// CREATE USER
router.post("/create-user", async (req, res) => {
    try {
        const user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        console.log(req.body.password)
        user.save();
        res.status(200).json(user);
    } catch (error) { res.status(500).json({ error: true, text: error.message }); }
});

// EDIT USER
router.post("/edit-user/:id", async (req, res) => {
    try {
        const Id =  req.params.id
        const user = await User.findByIdAndUpdate(Id, req.body);
        res.json(user);
    } catch (error) {
        res.json({ error: true, text: error.message });
    }
});



// EDIT USER
router.post("/edit-user/password/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate({ _id: req.params.id  ,  password :req.body.paswword});
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        user.save();
        res.json(user);
    } catch (error) {
        res.json({ error: true, text: error.message });
    }
});


// GET USER
router.post("/get-user/:id", async (req, res) => {
    try {
        const user = await User.findById({ _id: req.params.id });
        res.json(user);
    } catch (error) {
        res.json({ error: true, text: error.message });
    }
});

router.post("/delete-user/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete({ _id: req.params.id });
        res.json(user);
    } catch (error) {
        res.json({ error: true, text: error.message });
    }
});




// ALL USER
router.post("/all-users", async (req, res) => {
    try {
        const user = await User.find({});
        res.json(user.reverse());
    } catch (error) {
        res.json({ error: true, text: error.message });
    }
});


module.exports = router