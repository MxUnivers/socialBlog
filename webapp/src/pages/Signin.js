import React  , {useState} from 'react'
import  { Link, useNavigate } from  "react-router-dom";
import  axios  from  "axios";



const SignIn = () => {
    const navigate = useNavigate("");
    const [email, setemail] = useState("");
    const [keyPass, setkeyPass] = useState("");
    const [password, setpassword] = useState("");
   
      const  HandleSubmit = (e)=>{
        e.preventDefault();
        setemail(email);
        setpassword(password);
        
        axios.post("http://localhost:8000/api/auth/login",   {
            email :  email ,
            password :  password 
        }).then( (res)=>{

            setkeyPass(res.data.totken );
            setemail(res.data.email)
            localStorage.setItem("keyPass" ,keyPass );
            localStorage.setItem("firstName" ,res.data.firstName );
            localStorage.setItem("lastName" ,res.data.lastName );
            localStorage.setItem("profilePicture" , res.data.profilePicture );
            localStorage.setItem("email" , res.data.email );
            
            
            alert(res.data.token) ;
            navigate("/") ;

        } ).catch((error)=>{
            alert("Informations corrompus");
        })
    }


    return (
        <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">      
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl uppercase py-3 border-b border-gray-100 font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Identifiez vous
                </h1>
                <form className="space-y-4 md:space-y-6" onSubmit={HandleSubmit}>

                    <div>
                        <label for="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                    </div>
                        <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="firstName" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                    
  /                  <div>
                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                    </div>
                        <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
  
                    
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    <button type="submit" onClick={()=>{localStorage.setItem("email", email)}} className="w-full text-gray-800 bg-gray-100 hover:bg-gray-300 py-2 px-3 rounded-lg">Se connecter</button>
                        si vous n'avez pas de compte ? <Link to={`/signup`} className="text-white hover:underline font-bold">Créer un compte ?</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
    )
  }

export default SignIn;
