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
            <MyPosts state={props.state}
                     dispatch={props.dispatch}
            />
        </div>
    )
};


export default Profile;

