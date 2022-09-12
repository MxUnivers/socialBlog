

const Video = require("../Models/Video");
const router = require("express").Router();

// CREATE VIDEO
router.post("/create-video", async(req, res) => {
    try {
        const  art = req.body;
        const video = new Video(art);
        await video.save();
        res.status(200).json({ text: "videos créer avec succès", error: false, message: video });
    } catch (error) {
        res.status(400).json({ error: true, text: error.message });
        console.log(error);
    }
});
// GET VIDEO
router.post("/get-video/:id", async(req , res)=>{
    try {
        const   videoId  =  req.params.id;
        const  video =  await Video.findById(videoId);
        res.json(video);
    } catch (error) {
        res.status(401).json({error :true ,  text :  error.message})
        console.log(error);
    }
})


//EDIT VIDEO
router.post("/edit-video/:_id", async (req, res) => {
    try {
        const  videoId  =  req.params._id;
        const video = await Video.findByIdAndUpdate( videoId , req.body);
        res.status(202).json(video)
    } catch (error) {
        res.status(402).json({ error: true, text: error.message });
        console.log(error);
    }
});

// DELETE VIDEO
router.post("/delete-video/:_id", async (req, res) => {
    try {
        const  videoId  =  req.params._id;
        const video = await Video.findByIdAndDelete( videoId , req.body);
        res.status(202).json(video)
    } catch (error) {
        res.status(402).json({ error: true, text: error.message });
        console.log(error);
    }
});

// SHOW VIDEO
router.post("/show-video/:id", async (req, res) => {
    try {
        const  videoId  =  req.params.id;
       
        const video = await Video.findByIdAndUpdate( videoId ,{ visible:"true"});
        res.status(203).json(video);
    } catch (error) {
        res.status(403).json({ error: true, text: error.message });
    }
});
// HIDDEN VIDEO
router.post("/hide-video/:_id", async (req, res) => {
    try {
        const  videoId  =  req.params._id;
        const video = await Video.findByIdAndUpdate( videoId , {visible : "false"} );
        res.status(204).json({text: video});
    } catch (error) {
        res.status(404).json({ error: true, text: error.message });
    }
});


// ALL VIDEOS
router.post("/all-videos",async(req, res )=>{
    try {
        const  video =  await Video.find();
        res.json(video.reverse());
    } catch (error) {
        
    }
})

// ALL VIDEOS VISIBILITY
router.post("/all-videos/visible/:id", async (req, res) => {try {
    const video = await Video.find({visible :  req.params.id });
        res.json(video.reverse());
} catch (error) {res.json({ error: true, text: error.message });}});



    
// ALL VIDEO FOR CATEGORY
router.post("/all-videos/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true",category:req.params.category});
        res.status(206).json(video.reverse());
    } catch (error) {
        res.status(406).json({ error: true, text: error.message });
    }
})

// ALL VIDEO FOR CATEGORY HEADER
router.post("/all-videos/Header/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true", category:req.params.category  });
        res.json(video.reverse());
    } catch (error) {
        res.status(407).json({ error: true, text: error.message });
    }
})
// ALL VIDEO FOR CATEGORY ACCUEIL
router.post("/all-videos/Accueil/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true",category:req.params.category ,Accueil:"true" });
        res.status(208).json(video.reverse());
    } catch (error) {
        res.status(408).json({ error: true, text: error.message });
    }
})
// ALL VIDEO FOR CATEGORY RECENT
router.post("/all-videos/Recent/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true",category:req.params.category , Recent : "true" });
        res.status(210).json(video.reverse());
    } catch (error) {
        res.status(410).json({ error: true, text: error.message });
    }
})

// ALL VIDEO FOR CATEGORY EXCLUSIF
router.post("/all-videos/Exclusif/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true",category:req.params.category , Exclusif :"true" });
        res.status(209).json(video.reverse());
    } catch (error) {
        res.status(409).json({ error: true, text: error.message });
    }
})

// ALL VIDEO FOR CATEGORY SUGGESTION
router.post("/all-videos/Suggestion/:category", async (req, res) => {
    try {
        const video = await Video.find({visible :"true",category:req.params.category , suggestion : "true" });
        res.status(210).json(video.reverse());
    } catch (error) {
        res.status(410).json({ error: true, text: error.message });
    }
})





module.exports = router;

