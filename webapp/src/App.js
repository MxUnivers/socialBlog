import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"


// les pages de notre application
import NavBar from "./components/NavBar";
import Layout from "./Layout.js/Layout";
import AddPost from "./pages/AddPost";
import DetailsPost from "./pages/DetailsPost";
import ListPost from "./pages/ListPost";
import SignIn from "./pages/Signin";
import SingUp from "./pages/SingUp";
import UpdatePost from "./pages/UpdatePost";

function App() {
  const [signup, setsignup] = useState(`/signup`);
  const [signin, setsignin] = useState(`/signin`);
  
  return (
      <div className="w-full overflow-hidden">
        <BrowserRouter>
          <Routes>
            {/* les page d'inscription et connexion */}
            <Route path={`/signup`} element={<SingUp signin={`${signin}`} />}></Route>
            <Route path={`/signin`} element={<SignIn signup={`${signin}`} />}></Route>


            
            

            {/* Application social blog */}
            <Route path={""} element={<Layout signin={`${signin}`} signup={`${signup}`} />}>
            <Route path={``} element={<ListPost />}></Route>
            <Route path={`/:id/post/:id`} element={<DetailsPost />}></Route>
            <Route path={`/:id/add-post/`} element={<AddPost />}></Route>
            <Route path={`/:id/update-post/:id`} element={<UpdatePost />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>

    </div>

  );
}

export default App;
