import React from "react";
import MyPosts from "./ MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { DispatchActionType, PostType } from "../../Redux/State";

type ProfileType = {
  post: PostType[];
  newPostText: string;
  dispatch: (action: DispatchActionType) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        post={props.post}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
