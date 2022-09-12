const  Commentaire = require("../Models/Commentaires")
const router = require("express").Router();



router.post("/register",async(req ,  res)=>{
    try {
        const commentaire = new Commentaire(req.body)
        commentaire.save();
        res.status(200).json(commentaire);
    } catch (error) {
    res.status(405).json(error);
    }
});

router.post("/edit/:id",async(req ,  res)=>{
  try {
      const commentaire = await Commentaire.findOneAndUpdate({_id:req.params.id ,content:req.body.content});
      commentaire.save();
      res.status(200).json(commentaire);
  } catch (error) {
    res.status(405).json(error);
  }
});


// Tous les commentaires de chaque post
router.post("/all-comments/:id",async(req ,  res)=>{
  try {
      const commentaire = await Commentaire.find({IdPost:req.params.id})
      res.status(200).json(commentaire.reverse());
  } catch (error) {
    res.status(405).json(error);
  }
});

/*
Tous les commentaire
PARAMS :IdPost
*/
router.post("/all-comments",async(req ,  res)=>{
  try {
      const commentaire = await Commentaire.find({})
      res.status(200).json(commentaire.reverse());
  } catch (error) {
    res.status(405).json(error);
  }
});
module.exports = router