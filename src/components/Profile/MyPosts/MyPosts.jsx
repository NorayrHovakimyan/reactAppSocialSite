import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div className={s.content_bg}>
                <img src="images/content_bg.jpg" alt="content background"/>
            </div>
            <div>
                avatar + description
            </div>
            <div>
                My posts
                <div>
                    new post
                </div>
                <div>
                    post 1
                </div>
                <div>
                    post 2
                </div>
                <div>
                    post 3
                </div>
            </div>
        </div>
    )
};


export default Profile;

