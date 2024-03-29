import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BsBookmarkPlus, BsEmojiSmile } from 'react-icons/bs'
import { FaRegComment } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import Post from '../components/Post'

const DetailsPost = () => {
  // information qur utlisateur
  var emailConnexion = localStorage.getItem("email")
  var firstName =  localStorage.getItem("firstName");
  var lastName  =  localStorage.getItem("lastName");

  // information sur Post
  var Id = localStorage.getItem("IdPost")
  var email = localStorage.getItem("emailUser")
  var author = localStorage.getItem("author")
  var titre = localStorage.getItem("titlePost")
  var coverPicture = localStorage.getItem("coverPicturePost")
  var description = localStorage.getItem("descritpionPost")
  var content = localStorage.getItem("contentPost")

  const [IdPost, setIdPost] = useState(Id)
  const [authorName, setauthorName] = useState(author)
  const [titlePost, settitle] = useState(titre)
  const [coverPicturePost, setcoverPicture] = useState(coverPicture)
  const [contentPost, setcontent] = useState(content)
  const [descriptionPost, setdescription] = useState(description)
  const [emailUser, setemail] = useState(email);



  const [comments, setcomments] = useState([])
  const [contentComment ,  setcontentComment] = useState()
  

  useEffect(() => {
    getComments()
  }, [])

  const getComments = async () => {
    const response = await axios.post(`http://localhost:8000/api/comment/all-comments/${IdPost}`)
    setcomments(response.data)
  }
  const HandleSubmitComment = async(e)=>{
    
    e.preventDefault()
    setcontentComment(contentComment);
    var author  = `${firstName} ${lastName}`
    await axios.post("http://localhost:8000/api/comment/register",
    {
      authorName:author,
      email :emailConnexion,
      IdPost :IdPost,
      Subject : titlePost,
      content : contentComment
    }).then(
      (res)=>{alert(res.data) ;window.location.reload()}
      
    ).catch((error)=>{var a =  error ;  alert("Votre comentaire n'as pas été envoyé")})
    
  } 




  return (
    <div className=" w-full  px-4 flex flex-col items-center">

      <article className=" mb-4 break-inside p-6 rounded-xl bg-white dark:bg-slate-800 flex flex-col bg-clip-border sm:w-3/6 w-full">
        <div className="flex pb-6 items-center justify-between">
          <div className="flex">
            <a className="inline-block mr-4" href="#">
              <img className="rounded-full max-w-none w-12 h-12" src="https://randomuser.me/api/portraits/men/35.jpg" />
            </a>
            <div className="flex flex-col">
              <div>
                <a className="inline-block text-lg font-bold dark:text-white" href="#">{authorName}</a>
              </div>
              <div className="text-slate-500 dark:text-slate-300 dark:text-slate-400">
                July 17, 2018
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-3xl w-full font-extrabold dark:text-white">
          {titlePost}
        </h2>
        <div className="py-4 w-full">
          <div className="w-full gap-1 mb-1">
            <a className="flex w-full" href="#">
              <img className="w-full rounded-tl-lg"
                src={coverPicturePost} />
            </a>

          </div>

        </div>
        <p className="dark:text-slate-200">
          {descriptionPost}
        </p>
        <div className="w-full py-5">
          <div className="w-full" dangerouslySetInnerHTML={{ __html: contentPost }}></div>
        </div>
        <div className="py-4">
          <a className="inline-flex items-center" href="#">
            <span className="mr-2">
              <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                </path>
              </svg>
            </span>
            <span className="text-lg font-bold">34</span>
          </a>
        </div>
        <form className="relative" onSubmit={HandleSubmitComment}>
          <input value={contentComment} onChange={(e)=>{setcontentComment(e.target.value) }}
            className="pt-2 pb-2 pl-3 w-full h-11 bg-slate-100 dark:bg-slate-600 rounded-lg placeholder:text-slate-600 dark:placeholder:text-slate-300 font-medium pr-20"
            type="text" placeholder="Write a comment" />
          <span className="flex absolute right-3 top-2/4 -mt-3 items-center">
            <svg className="mr-2" style={{ width: "26px", height: "26px" }} viewBox="0 0 24 24">
              <path fill="currentColor"
                d="M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M10,9.5C10,10.3 9.3,11 8.5,11C7.7,11 7,10.3 7,9.5C7,8.7 7.7,8 8.5,8C9.3,8 10,8.7 10,9.5M17,9.5C17,10.3 16.3,11 15.5,11C14.7,11 14,10.3 14,9.5C14,8.7 14.7,8 15.5,8C16.3,8 17,8.7 17,9.5M12,17.23C10.25,17.23 8.71,16.5 7.81,15.42L9.23,14C9.68,14.72 10.75,15.23 12,15.23C13.25,15.23 14.32,14.72 14.77,14L16.19,15.42C15.29,16.5 13.75,17.23 12,17.23Z">
              </path>
            </svg>
            <button type="submit" className="fill-blue-500 bg-gray-300 p-1 rounded-lg dark:fill-slate-50" style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
              <path d="M2,21L23,12L2,3V10L17,12L2,14V21Z"></path>
              commenter
            </button>
          </span>
        </form>

        <div className="pt-6">
          {
            comments && comments.length > 0 ?
              (
                comments.map((comment) => {
                  return (
                    <div className="media flex pb-4">
                      <a className="mr-4" href="#">
                        <img className="rounded-full max-w-none w-12 h-12" src={comment.profilePicture} />
                      </a>
                      <div className="media-body">
                        <div>
                          <a className="inline-block text-base font-bold mr-2" href="#">{comment.authorName}</a>
                          <span className="text-slate-500 dark:text-slate-300">25 minutes ago</span>
                        </div>
                        <p  className="p-1 rounded-xl bg-gray-300 px-2">{comment.content}</p>
                        <div className="mt-2 flex items-center">
                          <a className="inline-flex items-center py-2 mr-3" href="#">
                            <span className="mr-2">
                              <svg className="fill-rose-600 dark:fill-rose-400" style={{ width: "22px", height: "22px" }}
                                viewBox="0 0 24 24">
                                <path
                                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z">
                                </path>
                              </svg>
                            </span>
                            <span className="text-base font-bold">12</span>
                          </a>
                          <button className="py-2 px-4 font-medium hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg">
                            Repply
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })
              ) :
              <div>Soyer la première personne a commenter</div>

          }






          <div className="w-full">
            <a href="#"
              className="py-3 px-4 w-full block bg-slate-100 dark:bg-slate-700 text-center rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition ease-in-out delay-75">Show
              more comments</a></div>

        </div>

      </article>
    </div>
  )
}

export default DetailsPost
