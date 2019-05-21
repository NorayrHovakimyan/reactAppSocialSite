import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/state";



const MyPosts = props => {
  // debugger;
  // console.log(props.newPostText,'myposts');

  let postsElements = props.profileState.map(i => (
    <Post message={i.message} likesCount={i.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addNewPost = () => {
    // debugger;
      props.dispatch( addPostActionCreator() );
      props.dispatch( updateNewPostTextActionCreator(''))
  };

  let onPostChange = () => {
      // debugger;
    let text = newPostElement.current.value;

    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);

  };

  return (
    <div className={s.myPosts}>
      My posts
      <div>
        <textarea
          ref={newPostElement}
          onChange={onPostChange}
          value={props.newPostText}
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

