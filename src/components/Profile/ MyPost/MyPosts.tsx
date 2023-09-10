import React from 'react';
import classes from './MyPosts.module.css'
import Posts from "./Post/Posts";

const Profile = () => {
    return (

        <div> My post
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>New Post
                <div className={classes.item}>
                    <Posts
                        img={'https://pixelbox.ru/wp-content/uploads/2022/08/avatar-boy-telegram-pixelbox.ru-88.jpg'}
                        message={'Hi, how are you?'}
                        likesCount='0'
                    />
                    <Posts
                        img={'https://kartinkof.club/uploads/posts/2022-06/1655389713_47-kartinkof-club-p-kartinki-s-dnem-samogonshchika-47.jpg'}
                           message={'Is`s my first post'}
                        likesCount='23'
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile;