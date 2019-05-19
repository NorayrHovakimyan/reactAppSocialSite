import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
       <div className={s.profileInfo}>
           <div className={s.content_bg}>
               <img src="images/content_bg.jpg" alt="content background"/>
           </div>
           <div className={s.avatarPage}>
               avatar + description
           </div>
       </div>
    )
};


export default ProfileInfo;

