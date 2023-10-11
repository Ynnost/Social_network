import React, { ChangeEvent, useState } from "react";
import s from "./MyPosts.module.css";
import { PostType } from "../../../App";
import { v1 } from "uuid";
import { Post } from "./Post/Posts";

type ProfileType = {
  post: PostType[];
  addPost: (message: string) => void;
};

const Profile = (props: ProfileType) => {
  
const [newMessage, setNewMessage] = useState("");

  const renderPost = () => {
    return props.post.map((post) => (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ));
  };


  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const addPost = () => {
    props.addPost(newMessage);
    setNewMessage("");
  };

  return (
    <div className={s.postBlock}>
      {" "}
      My post
      <div>
        <div>
          <textarea value={newMessage} onChange={onChangeText}></textarea>
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
