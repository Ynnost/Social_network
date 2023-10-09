import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import { PostType } from "../../../App";

type ProfileType = {
  post: PostType[];
};

const Profile = (props: ProfileType) => {
  
  const renderPost = () => {
    return props.post.map((el, i) => (
      <Posts
        key={i}
        message={el.message}
        img={el.img}
        likesCount={el.likesCount}
      />
    ));
  };

  const addPost = () => {
 const newPost = ''
  }

  return (
    <div className={s.postBlock}>
      {" "}
      My post
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button onClick={()=>{}}>Add post</button>
        <button>Remove</button>
      </div>
      <div>
        New Post
        <h5 className={s.post}>{renderPost()}</h5>
      </div>
    </div>
  );
};

export default Profile;
