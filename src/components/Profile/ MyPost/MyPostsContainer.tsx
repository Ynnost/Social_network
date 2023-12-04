import MyPosts from "./MyPosts";
import { connect } from "react-redux";
import { AppRootStateType } from "../../../store/reduxStore";
import { Dispatch } from "redux";
import { ProfileType } from "../../../type";
import { addPostActionCreator, updateNewPostActionCreator } from "../../../store/action";

type MapStateToProps = {
  profilePage: ProfileType;
};

type MapDicpatchToPropsType = {
  updateNewPost: (newPostText: string) => void;
  addPost: () => void;
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
