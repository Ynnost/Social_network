import React from "react";
import MyPosts from "./ MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../../Redux/State";

type ProfileType = {
  post: PostType[];
  newPostText: string;
  addPost: (message: string) => void;
  updateNewPost: (newPostText: string) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.post} addPost={props.addPost} newPostText={props.newPostText} updateNewPost={props.updateNewPost}/>
    </div>
  );
};

export default Profile;
