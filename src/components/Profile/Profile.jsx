import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    // debugger;
    console.log(props,'profile');
    return (
        <div className={s.profile}>
            <ProfileInfo/>
            <MyPosts profileState={props.profileState.postsData}/>
        </div>
    )
};


export default Profile;

