import React from 'react';
import classes from './Posts.module.css'

type PropsType = {
    message: string
    img: string
    likesCount:string

}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <img src={props.img} alt=""/> {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Profile;