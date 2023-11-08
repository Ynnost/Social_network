import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./ MyPost/MyPostsContainer";
import { PropsStateType } from "../../App";

const Profile = (props: PropsStateType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
