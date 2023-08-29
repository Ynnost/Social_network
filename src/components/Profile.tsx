import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.img}
                     src="https://sportishka.com/uploads/posts/2022-11/1667538859_10-sportishka-com-p-avtomobil-bochka-oboi-11.jpg" alt={""}/>
            </div>
            <div> ava + description</div>
            <div> My post <div>New Post <div className={classes.item}>
                <div>Post 1</div>
                <div>Post2</div>
            </div></div></div>
        </div>
    );
};

export default Profile;