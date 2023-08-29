import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./ MyPost/MyPosts";

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img}
                     src="https://sportishka.com/uploads/posts/2022-11/1667538859_10-sportishka-com-p-avtomobil-bochka-oboi-11.jpg"
                     alt={""}/>
            </div>
            <div> ava + description</div>
            <MyPosts/>
        </div>
    );
};

export default Profile;