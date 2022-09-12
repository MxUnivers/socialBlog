const mongoose =  require("mongoose");

const CommentaireShema = mongoose.Schema(
    {
        // auteur du post
        authorName:{type : "String",required:true},
        email:{type:"String",required:true},
        profilePicture:{type:"String",default:"https://cdn-icons-png.flaticon.com/512/149/149071.png"},
        // detail sujet commentaire
        IdPost:{type:"String" ,required:true},
        Subject :{ type:"String" ,  default:"" ,required:true},
        content: {type:"String" ,default:"..."},
    }, {timestamp:true}
)

const  Commentaire  = mongoose.model("commentaire",CommentaireShema);

module.exports = Commentaire ; 