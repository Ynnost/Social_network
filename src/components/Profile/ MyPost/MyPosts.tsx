import React, { ChangeEvent, useState } from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";
import { PostType } from "../../../App";
import { v1 } from "uuid";

type ProfileType = {
  post: PostType[];
  addPost: (message: string) => void;
};

const Profile = (props: ProfileType) => {
  const renderPost = () => {
    return props.post.map((el, i) => (
      <Posts key={i} message={el.message} likesCount={el.likesCount} />
    ));
  };

  let message = "";

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    return (message = e.currentTarget.value);
  };

  const addPost = () => {
    props.addPost(message);
    console.log(props.post);
  };

  return (
    <div className={s.postBlock}>
      {" "}
      My post
      <div>
        <div>
          <textarea onChange={onChangeText}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
        <button onClick={() => {}}>Remove</button>
      </div>
      <div>
        New Post
        <h5 className={s.post}>{renderPost()}</h5>
      </div>
    </div>
  );
};

export default Profile;
