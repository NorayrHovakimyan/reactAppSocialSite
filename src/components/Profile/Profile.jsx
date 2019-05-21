import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // debugger;
    // console.log(props);

    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profileState={props.profileState.postsData}
                     newPostText={props.profileState.newPostText}
                     addPost={props.addPost}
                     updatePostText={props.updatePostText}
            />
        </div>
    )
};


export default Profile;

