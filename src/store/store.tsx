import { v1 } from "uuid";
import {  profileReducer } from "./reducer/ProfileReducer";
import {  dialogsReducer } from "./reducer/DialogsReducer";
import { DialogsType, StoreType } from "../type";
import { ProfileType } from "../components/Profile/ MyPost/MyPosts";


export const store: StoreType = {
  _state: {
    profilePage: {
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
    },

    dialogsPage: {
      dialogs: [
        { id: v1(), name: "Denis Yunin", to: "/dialogs/1" },
        { id: v1(), name: "Pavel Aladkin", to: "/dialogs/2" },
        { id: v1(), name: "Micha Koldune", to: "/dialogs/3" },
        { id: v1(), name: "Maria Shah", to: "/dialogs/4" },
        { id: v1(), name: "Irisha Yunina", to: "/dialogs/5" },
      ],
      message: [
        { id: v1(), message: "Hi" },
        { id: v1(), message: "How are you?" },
        { id: v1(), message: "Yo" },
        { id: v1(), message: "Yo" },
        { id: v1(), message: "What?" },
      ],
      newMessageBoody: "",
    },
  },
  _rernderEntireTree() {
    console.log("state changed");
  },
  subscribe(observer: () => void) {
    this._rernderEntireTree = observer; // observer
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action) as ProfileType;
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action) as DialogsType;

    this._rernderEntireTree();
  },
};
