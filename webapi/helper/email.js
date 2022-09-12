const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();


var htmlText  = `<div style=""> 
<div style="color:black;text-align:'text-center'; font-size:20px;font-weight:700">
   Instructions de récupration de  votre mot de passe
</div>
<br style=" margin-top:'5px'; margin-bottom:'5px'; background-color:'black';"/>
</div style="display:'flex'; flex-direction:'column'; color:'gray' ">
    Cliquer sur mot de passe oublié .
    Renseignez votre email.
    Coppiez le code envoyé dans votre boite mail 
    puis rensighez le 
    Rensigner votre mot nouveau de passe 
    puis connecter vous a nouveau
</div>
</div>
`;

const  ForgetPassword = async (email , sujet , htl)=>{
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,auth: {user:process.env.MAIL_USER,pass: process.env.MAIL_PASS},
        tls: {rejectUnauthorized: false},
      });
      console.log(process.env.MAIL_USER);
      console.log(email);
    var mailOptions = {from: String(process.env.MAIL_USER),to: email,subject: sujet, 
      html : htl };
    transporter.sendMail(mailOptions, (err, info)=>{
        if (err) {
            console.log(err.message+" error message");} 
        else {console.log( info.response+ "mesage Envoyé avec succès")};
          }
    )
}


async function SendCode(email , sujet , htl){
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',port: 535 ,service :"gmail",auth: {user:process.env.MAIL_USER,pass: process.env.MAIL_PASS},
        tls: {rejectUnauthorized: false},
      });
    var mailOptions = {from: process.email,to: email,subject: sujet, 
      html : htl };
    transporter.sendMail(mailOptions, (err, info)=>{if (err) {console.log(err);} else {console.log("Message envoyé "+ info.response)};  
          }
    )
}

module.exports =  { ForgetPassword , SendCode  ,  htmlText} ;