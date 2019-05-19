import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myposts}>
            My posts
            <div>
                <textarea name="addpost" id="addPost" cols="30" rows="3" placeholder='type text..'> </textarea>
                 <div>
                     <button>Add Post</button>
                 </div>
            </div>
            <Post/>
        </div>
    )
};


export default MyPosts;

