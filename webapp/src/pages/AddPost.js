
import React, { useRef, useState } from 'react'
import { useQuill ,  } from 'react-quilljs';
import  ReactMarkdown from  "react-markdown"
import 'quill/dist/quill.snow.css';
import {BiSend} from  "react-icons/bi"
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddPost = () => {
    // author de post
    var  authorName =localStorage.getItem("authorName")
    var  profilePicture =localStorage.getItem("profilePicture");
    

    const  navigate =  useNavigate();
    // editor
    const { quill, quillRef , Quill } = useQuill();
    const counterRef = useRef();
    // information sur article
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [coverPicture, setcoverPicture] = useState("");
    const [content, setContent] = useState("");

    const HandleSave = ()=>{
        var  text  = quill.root.innerHTML
        setContent(text);
    }

    const HandleSubmit = async(e)=>{
        e.preventDefault()
        var text  =  quill.root.innerHTML;
        settitle(title);
        setdescription(description);
        setcoverPicture(coverPicture);
        setContent(text)
        
        await axios.post("http://localhost:8000/api/post/create-post",
            {
                authorName : authorName,
                title:title, 
                description :description ,
                coverPicture :coverPicture ,
                content :content ,
            }
        ).then((res)=>{
            alert("Création réussi"+res.data.content);
            navigate("/")

        }).catch((error)=>{
            alert("information corrompus".toLocaleUpperCase);
            console.log(error)
        })
    }


    return (

        <div className="w-full  bg-gray-400">
            <div className="h-[750px]">
                <div className="py-3 bg-blue-600 text-center relative " >
                    <div className="absolute shadow-lg border border-gray-300 top-1 left-3 py-1 flex space-x-3 items-center bg-gray-200 rounded-2xl px-3">
                        <img src={`https://randomuser.me/api/portraits/men/32.jpg`}  className="rounded-[50%] h-10 w-10 prose"/>
                        <div className="font-bold textupper">{authorName}</div>
                    </div>
                    <h2 className="text-2xl font-bold">Créer un publication</h2>
                </div>
                <form className="relative py-3 px-3 pt-4 pb-10" onSubmit={HandleSubmit}>
                    <div className="absolute top-0 left-0 w-[70%] py-5 bg-gray-200 border-t px-5">
                        <div className="py-2">
                            <input type="text" onChange={(e)=>{settitle(e.target.value)}} className="py-3 text-3xl font-semibold  w-full text-gray-700 px-2 rounded-1xl" placeholder="titre de votre story" />
                        </div>
                        <div className="py-2">
                            <textarea type="text" onChange={(e)=>{setdescription(e.target.value)}} className="py-3 text-xl font-medium w-full h-[150px] text-gray-700 px-2 rounded-1xl" placeholder="description vu par vos amis ici ..." />
                        </div>
                        <div className="w-full">
                             <input type="text" onChange={(e)=>{setcoverPicture(e.target.value)}}  accept="image/*"  className="py-1 px-2 font-bold" placeholder="image photo" />
                        </div>
                        <div className="w-full  bg-gray-100 py-10">
                            <div className="oveflow-hidden rounded-lg bg-white h-[250px]"   placeholder="tell in your story"  aria-required={'true'} ref={quillRef}></div>
                        </div>
                    </div>
                    {/* block 2 */}
                    <div className="absolute top-0 right-0  w-[30%] bg-white py-5 px-2">
                        <div className="flex py-3 px-5 w-full">
                            <div className="w-full"><button type="submit" onClick={HandleSave} className="w-full py-1 px-2 bg-blue-800 text-white rounded-2xl  flex space-x-2 justify-center items-center" >Publier <BiSend  className="h-5 w-5"/></button></div>
                        </div>
                        <div className="border-t border-gray-200 py-3">
                            <div className="w-full flex justify-center items-center">
                                {
                                    coverPicture == ""?
                                    null:
                                    <img src={coverPicture}  className="w-32 h-32"/>
                                }
                            </div>
                            <div className="border-t border-gray-300 py-3 my-1">
                                <div className="text-center bg-gray-200">
                                    information supplementaire
                                </div>
                                <div className="py-3 border-t border-gray-300">
                                    <div className="grid-cols-2 space-x-3 spcae-y-2">
                                        <div>
                                            <div className="py-1"> catégorie</div>
                                        <select>
                                            <option value="">text1</option>
                                            <option value="">text1</option>
                                            <option value="">text1</option>
                                        </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddPost
