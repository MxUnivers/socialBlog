
import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";

const Layout = ({ signin, signup }) => {
    const navigate = useNavigate()
    var emailLocal = localStorage.getItem("email");
    var keyPass = localStorage.getItem("keyPass", keyPass);
      
    // information utlisateur
    var profilePicture  =  localStorage.getItem("proflePicture");
    var firstName =  localStorage.getItem("firstName");
    var lastName  =  localStorage.getItem("lastName");

    const [email, setemail] = useState(emailLocal);
    if (keyPass == null) {
        return (<Navigate to={`${signin}`} />)
    }
    else {
        return (
            <div className="container-fluid w-full">
                <nav className="flex justify-between px-3">
                    <div><a href={`/`}>Accueil</a></div>
                    <div><a href={`/`}>recherche</a></div>
                    <div className="flex flex-row space-x-3 ">
                        <div className="">{`${firstName} ${lastName}`}</div>
                        <div onClick={() => {
                            localStorage.removeItem("keyPass");
                            navigate("/signin");
                        }} >deconnexion</div>
                    </div>
                </nav>
                <div className="container-fluid w-full bg-gray-900">
                    <Outlet />
                </div>
            </div>
        )
    }
}

export default Layout