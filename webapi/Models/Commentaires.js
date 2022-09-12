const mongoose =  require("mongoose");

const CommentaireShema = mongoose.Schema(
    {
        
        Subject :{ type:String ,  default:"" ,required},
        content: {type : mongoose.Schema.Types.ObjectId ,  ref:"user"}
    }, {timestamp:true}
)

const  Commentaire  = mongoose.model("commentaire",CommentaireShema);

module.exports = Commentaire ; 