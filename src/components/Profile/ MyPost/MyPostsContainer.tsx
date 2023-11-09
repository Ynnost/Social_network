import {
  addPostActionCreator,
  updateNewPostActionCreator,
} from "../../../Redux/ProfileReducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../storeContext";

const MyPostsContainer = () => {
  // let store = props.store.getState().profilePage;

  // const onChangeText = (text: string) => {
  //   props.store.dispatch(updateNewPostActionCreator(text));
  // };

  // const addPost = () => {
  //   props.store.dispatch(addPostActionCreator());
  // };

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().profilePage;

        const onChangeText = (text: string) => {
          store.dispatch(updateNewPostActionCreator(text));
        };

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            updateNewPost={onChangeText}
            addPost={addPost}
            post={state.post}
            newPostText={state.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
