
const express = require("express");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const  cors  =  require("cors");
dotenv.config();



// Import routes of application
const videoRoute = require("./routes/video");
const userRoute = require("./routes/user");
const authUserRoute =require("./routes/authuser");
const postRoute =require("./routes/posts");
const commentaireRoute =require("./routes/commentaire");



app = express();



/* Mogoose connected */
mongoose.connect(process.env.MONGO_URL , {useNewUrlParser : true }, (error)=> {
    if(error){console.log("Error"+error);}else{console.log("Moogose Connected ...");}});

/* Middlewares */
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE');
    next();
});
app.use(express.json());
app.use(helmet());
app.use( cors({origin: "*", }) );


// test api
app.get("/api/test" , (req , res)=>{
     res.send("salut tout le monde ");
});

// api all
app.use("/api/video" ,  videoRoute);
app.use("/api/user", userRoute);
app.use("/api/auth",authUserRoute);
app.use("/api/post",postRoute);
app.use("/api/comment",commentaireRoute);



/* application ecoute sur le serveur */
app.listen(process.env.PORT,()=>{
    console.log("Le port Ecoute sur le port "+process.env.PORT);
});