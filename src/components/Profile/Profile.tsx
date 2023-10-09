import React from "react";
import MyPosts from "./ MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../../App";

type ProfileType = {
  post: PostType[];
  addPost: (message: string) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.post} addPost={props.addPost}/>
    </div>
  );
};

export default Profile;
