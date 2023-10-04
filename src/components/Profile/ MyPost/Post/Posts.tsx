import React from 'react';
import c from './Posts.module.css'

type PropsType = {
    message: string
    img: string
    likesCount:number

}

const Profile = (props: PropsType) => {
    return (
        <div className={c.item}>
            <img src={props.img} alt=""/> {props.message}
            <div className={c.like}><i
                className={c.likeWo}></i> <i
                className={c.likeWa}></i>{props.likesCount}</div>
        </div>
    );
};

export default Profile;