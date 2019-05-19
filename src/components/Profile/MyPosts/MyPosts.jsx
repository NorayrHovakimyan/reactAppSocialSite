import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {
    // debugger;
    let postsElements = props.profileState.map(i => <Post message={i.message} likesCount={i.likesCount}/>);

       return (
        <div className={s.myPosts}>
            My posts
            <div>
                <textarea name="addpost" id="addPost" cols="30" rows="3" placeholder='type text..'> </textarea>
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

