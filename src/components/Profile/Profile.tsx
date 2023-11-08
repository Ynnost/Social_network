import MyPosts from "./ MyPost/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { DispatchActionType, PostType, StoreType } from "../../Redux/store";
import MyPostsContainer from "./ MyPost/MyPostsContainer";

type ProfileType = {
  store: StoreType;
  dispatch: (action: DispatchActionType) => void;
};

const Profile = (props: ProfileType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
