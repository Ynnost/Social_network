import React, { ChangeEvent, useState } from "react";
import s from "./MyPosts.module.css";
import { v1 } from "uuid";
import { Post } from "./Post/Posts";
import { DispatchActionType, PostType } from "../../../Redux/store";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/ProfileReducer";
import { DialogsPagePropsType } from "../../Dialogs/DialogsConteiner";
import { ProfilePagePropsType } from "./MyPostsContainer";

export type ProfileType = {
  post: PostType[];
  newPostText: string;
  updateNewPost: (text: string) => void;
  addPost: () => void;
};

const MyPosts = (props: ProfilePagePropsType) => {
  const renderPost = () => {
    return props.profilePage.post.map((post) => <Post key={post.id} message={post.message} likesCount={post.likesCount} />);
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPost(e.currentTarget.value);
  };

  const addPost = () => {
    props.addPost();
  };

  return (
    <div className={s.postBlock}>
      {" "}
      My post
      <div>
        <div>
          <textarea value={props.profilePage.newPostText} onChange={onChangeText}></textarea>
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

export default MyPosts;
