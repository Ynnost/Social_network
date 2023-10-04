import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Posts";
import {PostType} from "../../../App";


 type ProfileType = {
    post:PostType[]
}

const Profile = (props:ProfileType) => {

    return (

        <h2 className={s.postBlock}> My post
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
                <div>
                    <button>Remove</button>
                </div>
            </div>
            <h3>New Post
                <h5 className={s.post}>
                    {props.post.map(el=><Posts message={el.message} img={el.img} likesCount={el.likesCount}/>)}
                </h5>
            </h3>
        </h2>
    );
};

export default Profile;