import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.post}>
            <div className={s.info}>
                <div className={s.avatar}>
                    <img src="images/post_avatar.png" alt="avatar"/>
                </div>
                <div className={s.text}>
                    { props.message}
                    <div>Likes - { props.likesCount }</div>
                </div>
            </div>
        </div>
    )
};


export default Post;

