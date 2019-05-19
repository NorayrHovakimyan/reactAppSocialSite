import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div className={s.content_bg}>
                <img src="images/content_bg.jpg" alt="content background"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
};


export default Profile;

