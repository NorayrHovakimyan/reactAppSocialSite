import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = props => {
  // debugger;
  // console.log(props.newPostText,'myposts');

  let postsElements = props.state.profilePage.postsData.map(i => <Post message={i.message} likesCount={i.likesCount} />);

  let newPostMessage = props.state.profilePage.newPostText;

  let addNewPost = () => {
    // debugger;
      props.dispatch( addPostActionCreator() );
  };

  let onPostChange = (e) => {
      // debugger;
    let postText = e.target.value;
    props.dispatch(updateNewPostTextActionCreator(postText));
  };

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <textarea
          onChange={onPostChange}
          value={newPostMessage}
          cols="30"
          rows="3"
          placeholder="type text.."
        />
        <div>
          <button onClick={addNewPost}>Add Post</button>
        </div>
      </div>
      <div className={s.post}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;

