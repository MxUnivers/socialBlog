const  Commentaire = require("../Models/Commentaires")
const router = require("express").Router();



router.post("/register",async(req ,  res)=>{
    try {
        const commentaire = new Commentaire(req.body)
        commentaire.save();
        res.status(200).json(commentaire);
    } catch (error) {
      console.log(error);
    }
});
module.exports = router