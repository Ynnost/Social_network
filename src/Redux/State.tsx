import { v1 } from "uuid";


export type StoreType = {
  _state: StateType;
  subscribe: (observer: () => void) => void;
  _rernderEntireTree: () => void;
  getState: () => StateType;
  dispatch: (action: DispatchActionType) => void;
};

export type StateType = {
  profilePage: {
    newPostText: string;
    post: PostType[];
  };
  dialogsPage: DialogsType;
};

export type DialogsType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody:string;
};

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogsItemType = {
  id: string;
  name: string;
  to: string;
};

export type MessagesType = {
  id: string;
  message: string;
};

export type DispatchActionType =
  | AddPostActionCreator
  | UpdateNewPostActionCreator
  | UpdateNewMessageBodyActionCreator;

type AddPostActionCreator = {
  type: "ADD-POST";
  message:string
};

type UpdateNewPostActionCreator = {
  type: "UPDATE-NEW-POST-TEXT";
  newText: string;
};

type UpdateNewMessageBodyActionCreator = {
  type: "UPDATE-NEW-MESSAGE-BODY";
  newTextBody: string;
};




export let addPostActionCreator = (message: string): AddPostActionCreator => {
  return {
    type: "ADD-POST",
    message: message,
  };
};

export let updateNewPostActionCreator = (
  newText: string
): UpdateNewPostActionCreator => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText
  };
};

export let updateNewMessageBodyActionCreator = (
  newTextBody: string
): UpdateNewMessageBodyActionCreator => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    newTextBody,
  };
};




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
      newMessageBoody:'',
    },
  },
  _rernderEntireTree() {
    console.log("state changed");
  },
  subscribe(observer: () => void) {
    this._rernderEntireTree = observer; // observer
  },
  getState(){
    return this._state
  },
  dispatch(action){
    if(action.type === 'ADD-POST'){
       const newMessage = { id: v1(), message:action.message, likesCount: 0 };
       console.log(newMessage);
       this._state.profilePage.post.push(newMessage);
       this._rernderEntireTree();
    }
    if(action.type === 'UPDATE-NEW-POST-TEXT'){
      this._state.profilePage.newPostText = action.newText;
      this._rernderEntireTree();
    };
    if(action.type === 'UPDATE-NEW-MESSAGE-BODY'){
      this._state.dialogsPage.newMessageBoody = action.newTextBody;
      this._state.dialogsPage.message.push({ id: v1(), message: action.newTextBody});
      this._state.dialogsPage.newMessageBoody = ''
      this._rernderEntireTree();
    }

  }
};
