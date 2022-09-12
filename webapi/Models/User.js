


const mongoose =  require('mongoose'); 
const jwt =  require("jsonwebtoken"); 
const bcrypt =  require("bcryptjs"); 
const  dotenv =  require("dotenv");
const  uniqueValidator = require("mongoose-unique-validator")
dotenv.config();


const UserShema =  new mongoose.Schema({
    firstName : {
        type:String , 
        required : true,       
    },
    lastName:{
        type:"String" , 
        required : true
    },
    code:{
        type:"String" , 
        trim : true , default: "225"
    },
    telephone : {
        type:"String",
        trim : true
    },
    email : {
        type:"String" , 
        required : true,
        unique : true
    },
    password : {
        type:"String", 
        required :true
    },
    profilePicture : {
         type:"String" ,
         default:"https://cdn-icons-png.flaticon.com/512/149/149071.png",
    },
    isAdmin : {
        type: Boolean , 
        default:false,
    },
    tokens:[{
        token:{
            type:String , 
            default:""
        },
        status:{
            type:String , 
            enum : {values :['active' , 'trashed'] },
            default:""
        }

    }] ,
    token : {
        type:String ,
        default:""
    },
    status : {
        type :String,
        default:"trash"
    },
    VerifyPass :{
        type :String,
        default:""
    }
},{timestamp : true} );

UserShema.plugin(uniqueValidator);

const User =  mongoose.model('user',  UserShema);

module.exports =  User ;


