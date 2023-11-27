import { v1 } from "uuid";
import { DispatchActionType, ProfileType } from "./store";

const initialState: ProfileType = {
  newPostText: "IT KAMASUTRA",
  post: [
    {
      id: v1(),
      message: "Hi, how are you?",
      likesCount: 12,
    },
    {
      id: v1(),
      message: "Is`s my first post",
      likesCount: 11,
    },
  ],
};

export type AddPostActionCreator = {
  type: "ADD-POST";
};

export type UpdateNewPostActionCreator = {
  type: "UPDATE-NEW-POST-TEXT";
  newText: string;
};

export const profileReducer = (state: ProfileType = initialState, action: DispatchActionType): ProfileType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost = { id: v1(), message: state.newPostText, likesCount: 0 };
      const data = [...state.post, newPost];
      return { ...state, post: data };
    }
    case "UPDATE-NEW-POST-TEXT": {
      console.log(action.newText);
      return {
        ...state,
        newPostText: action.newText,
      };
    }
    default:
      return state;
  }
};

export let addPostActionCreator = (): AddPostActionCreator => {
  return {
    type: "ADD-POST",
  };
};

export let updateNewPostActionCreator = (newText: string): UpdateNewPostActionCreator => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText,
  };
};
