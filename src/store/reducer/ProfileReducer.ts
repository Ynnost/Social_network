import { v1 } from "uuid";
import { DispatchActionType, ProfileType } from "../../type";



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

export const profileReducer = (state: ProfileType = initialState, action: DispatchActionType): ProfileType => {
  switch (action.type) {
    case "ADD-POST": {
      const newPost = { id: v1(), message: state.newPostText, likesCount: 0 };
      const data = [...state.post, newPost];
      state.newPostText = "";
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
