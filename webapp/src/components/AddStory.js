import React from 'react'
import {BiWinkSmile} from "react-icons/bi"
import { useNavigate } from 'react-router-dom'

const AddStory = ({author , profilePicture}) => {
  const navigate  =  useNavigate();
  return (
    <div className=" flex flex-col w-full px-2 rounded-lg ">
      <div className="py-2 font-bold">Publier quelque chose</div>  

      <div className="w-full flex items-center space-x-2">
      <div>
        <img src={`https://pbs.twimg.com/media/FcM1ZPvXoAAkhtt?format=jpg&name=small`} className="w-10 h-10 rounded-[50%] prose"/>
      </div>
      <a href={`/${author}/add-post`} className="flex space-x-2" onClick={()=>{
        localStorage.setItem("authorName",author)
        localStorage.setItem("profilePicture",profilePicture)

      }}>
        <input type="text" className="rounded-lg shadow-sm py-1 px-2" placeholder={`story ${author} ...`}/>
        <BiWinkSmile className="h-6 w-6"/>

      </a>
      </div>

    </div>
  )
}

export default AddStory
