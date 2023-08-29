import React from 'react';
import classes from './Posts.module.css'

type PropsType = {
    name: string
    img: string
}

const Profile = (props: PropsType) => {
    return (
        <div className={classes.item}>
            <img src={props.img} alt=""/> <div>{props.name}</div>
            <div><span>like</span></div>
        </div>
    );
};

export default Profile;