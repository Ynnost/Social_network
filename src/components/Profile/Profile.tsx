import React from "react";
import MyPosts from "./ MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType } from "../../App";

type ProfileType = {
  post: PostType[];
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.post} />
    </div>
  );
};

export default Profile;
