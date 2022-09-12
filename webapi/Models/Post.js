const  mongoose  =  require("mongoose");


const uniqueValidator =  require("mongoose-unique-validator");

const  PostSchema =  new mongoose.Schema({
    authorName:{type : "String" } ,
    email : {type:"String" ,  } ,
    title : {type:"String" ,  require:true, default:""} ,
    description : {type:"String" ,  require:true, default:""} ,
    coverPicture : {type:"String" ,  require:true, default:""} ,
    date:{type:"String" ,  require : true , default:""},
    content : {type:"String" ,  require:true , default:""} ,
},{ timestamps:true});

const Post = mongoose.model("Post" , PostSchema);

module.exports = Post;