import React, { ChangeEvent, useState } from "react";
import s from "./MyPosts.module.css";
import { v1 } from "uuid";
import { Post } from "./Post/Posts";
import { DispatchActionType, PostType } from "../../../Redux/State";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/ProfileReducer";

type ProfileType = {
  post: PostType[];
  newPostText: string;
  dispatch: (action: DispatchActionType) => void;
};


const Profile = (props: ProfileType) => {

  const renderPost = () => {
    return props.post.map((post) => (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ));
  };

  console.log(props.post)

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewPostActionCreator(e.currentTarget.value));
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  return (
    <div className={s.postBlock}>
      {" "}
      My post
      <div>
        <div>
          <textarea
            value={props.newPostText}
            onChange={onChangeText}
          ></textarea>
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
