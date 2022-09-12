const  mongoose = require("mongoose");

// Model 
const ArticleShema = new mongoose.Schema(
    {
     title : { type:"string"  , required:true },
     category : {type : "string" },
     description : {type: "string" , required:true },
     content:{type :"string" , required:true },
     coverPicture:{  type: "string" , required:true },
     suggestion:{type:"string" ,  default:"true"   },
     Header:{type:"string",default:"false"},
     Exclusif :{type:"string" , default:"false" },
     Accueil :{type:"string" , default:"false" },
     visible :{type:"string" ,  default:"true"   },
     }
     ,{timestamp : true}
  ) ;

// function
const  Article = mongoose.model("article" , ArticleShema ) ;

module.exports = Article;


