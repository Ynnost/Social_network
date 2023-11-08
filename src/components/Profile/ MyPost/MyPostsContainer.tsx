import { ChangeEvent } from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { PropsStateType } from "../../../App";


const MyPostsContainer = (props: PropsStateType) => {
  let store = props.store.getState().profilePage;
  const onChangeText = (text: string) => {
    props.store.dispatch(updateNewPostActionCreator(text));
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts
      updateNewPost={onChangeText}
      addPost={addPost}
      post={store.post}
      newPostText={store.newPostText}
    />
  );
};

export default MyPostsContainer;
