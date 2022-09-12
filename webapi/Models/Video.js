const  mongoose = require("mongoose");

// Model 
const VideoShema = new mongoose.Schema(
    {
     title : { type:"string"  , required:true },
     description : {type: "string" , required:true },
     lien:{type :"string" , required:true },
     coverPicture:{  type: "string" , required:true },
     category:{type:"string" , default:""},
     content:{type:"string" , required:true},
     Exclusif :{type:"string" , default:"false"},
     Accueil :{type:"string" , default:"false"},
     visible :{type:"string" ,  default:"true"},
     Recent:{type:"string" ,  default:"true"},
     suggestion:{type:"string" , default:"true"},
     Header:{type:"string",default:"false"}
     }
     , 
     {timestamp : true} 
  ) ;

// function
const  Video = mongoose.model("video" , VideoShema ) ;

module.exports = Video;


