import { addPostActionCreator, updateNewPostActionCreator } from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { ProfileType } from "../../../Redux/store";
import { connect } from "react-redux";
import { AppRootStateType } from "../../../Redux/reduxStore";
import { Dispatch } from "redux";



type MapStateToProps = {
  profilePage: ProfileType;
};

type MapDicpatchToPropsType = {
  updateNewPost: (newPostText: string) => void;
  addPost:()=>void
};

export type ProfilePagePropsType = MapStateToProps & MapDicpatchToPropsType;

let mapStateToProps = (state: AppRootStateType): MapStateToProps => {
  return {
    profilePage: state.profilePage,
  };
};

let mapDicpatchToProps = (dispatch: Dispatch): MapDicpatchToPropsType => {
  return {
    updateNewPost: (newPostText: string) => {
      dispatch(updateNewPostActionCreator(newPostText));
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDicpatchToProps)(MyPosts);

export default MyPostsContainer;
