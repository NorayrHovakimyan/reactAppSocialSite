import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


let postsData = [
    {id:1,message:'Hello It\'s',likesCount:12},
    {id:3,message:'My First',likesCount:8},
    {id:4,message:'React App',likesCount:37}
];

let postsElements = postsData.map(i => <Post message={i.message} likesCount={i.likesCount}/>);

const MyPosts = () => {
       return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea name="addingpost" id="addPost" cols="30" rows="3" placeholder='type text..'> </textarea>
                 <div>
                     <button>Add Post</button>
                 </div>
            </div>
            <div className={s.post}>
                { postsElements}
            </div>
        </div>
    )
};

export default MyPosts;

