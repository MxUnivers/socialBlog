

const Post = require("../Models/Post");
const router = require("express").Router();

// CREATE post
router.post("/create-post", async(req, res) => {
    try {
        const  art = req.body;
        const post = new Post(art);
        await post.save();
        res.status(200).send({ text: "post créer avec succès", error: false, message: post });
    } catch (error) {
        res.status(404).send({ error: true, text: error.message });
        console.log(error);
    }
});


//EDIT post
router.post("/edit-post/:_id", async (req, res) => {
    try {
        const  articleId  =  req.params._id;
        const post = await Post.findByIdAndUpdate( articleId , req.body);
        res.status(203).send(post)
    } catch (error) {
        res.status(403).send({ error: true, text: error.message });
        console.log(error);
    }
});
router.post("/delete-post/:_id", async (req, res) => {
    try {
        const  articleId  =  req.params._id;
        const post = await Post.findByIdAndRemove( articleId , req.body);
        res.status(203).send(post)
    } catch (error) {
        res.status(403).send({ error: true, text: error.message });
        console.log(error);
    }
});



router.post("/get-post/:id", async(req , res)=>{
    try {
        const  post =  await Post.findById({ _id:req.params.id});
        res.status(202).json(post);
    } catch (error) {
        res.status(402).json({error :true ,  text :  error.message})
        console.log(error);
    }
})
// ALL ARTICLES
router.post("/all-posts", async (req, res) => {
    try {
        const post = await Post.find();
        res.status(201).send(post.reverse());
    } catch (error) {
        res.status(401).send({ error: true, text: error.message });
    }
})









// SHOW post
router.post("/show-post/:id", async (req, res) => {
    try {
        const  articleId  =  req.params.id;
       
        const post = await Post.findById(req.params.id);
        res.status(204).json(post);
    } catch (error) {
        res.status(404).send({ error: true, text: error.message });
    }
})
// HIDDEN post
router.post("/hide-post/:_id", async (req, res) => {
    try {
        const  articleId  =  req.params._id;
        const post = await Post.findByIdAndUpdate( articleId , {visible : "false"} );
        res.status(204).json({text: post});
    } catch (error) {
        res.status(404).send({ error: true, text: error.message });
    }
})

/* GET post FOR OPTIONS  */

// GET post BY ID 



module.exports = router;

