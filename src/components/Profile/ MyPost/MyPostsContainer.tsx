import { ChangeEvent } from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import { DispatchActionType, StoreType } from "../../../Redux/store";


type MyPostsContainerType = {
  dispatch: (action: DispatchActionType) => void;
  store: StoreType;
};

const MyPostsContainer = (props: MyPostsContainerType) => {

  let store = props.store.getState().profilePage
  const onChangeText = (text:string) => {
    props.dispatch(updateNewPostActionCreator(text));
  };

  const addPost = () => {
    props.dispatch(addPostActionCreator());
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
