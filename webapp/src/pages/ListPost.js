import axios from 'axios'
import React, { useEffect, useState } from 'react'
import AddStory from '../components/AddStory'
import Comments from '../components/Comments'
import Post from '../components/Post'
import AddPost from './AddPost'

const ListPost = () => {
    // information author 
    var profilePicture  =  localStorage.getItem("proflePicture");
    var firstName =  localStorage.getItem("firstName");
    var lastName  =  localStorage.getItem("lastName");
    
    const [postList, setpostList] = useState([]);

    useEffect(() => {
        getPost()
    }, [])
    const getPost = async () => {
        const response = await axios.post("http://localhost:8000/api/post/all-posts")
        setpostList(response.data)
    }
    return (
        <div className="bg-gray-200 flex flex-col mx-96 justify-center  ">
            <AddStory author={`${firstName} ${lastName}`}profilePicture ={`${profilePicture}`}    />

            {
                postList.map((post) => {
                    return (

                        <div className="flex flex-col justify-center  bg-gray-100">
                            <Post
                                IdPost={post._id}
                                email={post.email}
                                content={post.content}
                                authorName={post.authorName}
                                chaine="@chaine myblog"
                                time={post.createdAt}
                                title={post.title}
                                description={post.description}
                                coverPicture={post.coverPicture}
                            />
                            <Comments />
                        </div>

                    )
                })
            }

        </div>
    )
}

export default ListPost
