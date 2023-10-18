import React, { ChangeEvent, useState } from "react";
import s from "./MyPosts.module.css";
import { v1 } from "uuid";
import { Post } from "./Post/Posts";
import { PostType } from "../../../Redux/State";

type ProfileType = {
  post: PostType[];
  newPostText: string;
  addPost: (message: string) => void;
  updateNewPost: (newPostText: string) => void;
};

const Profile = (props: ProfileType) => {
  
const [newMessage, setNewMessage] = useState(props.newPostText);

  const renderPost = () => {
    return props.post.map((post) => (
      <Post key={post.id} message={post.message} likesCount={post.likesCount} />
    ));
  };


  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewPost(e.currentTarget.value);
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
          <textarea
            value={props.newPostText}
            onChange={onChangeText}
          ></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
        <button onClick={()=>{}}>Remove</button>
      </div>
      <div>
        New Post
        <h5 className={s.post}>{renderPost()}</h5>
      </div>
    </div>
  );
};

export default Profile;
