import { v1 } from "uuid";
import { DialogsType } from "../components/Dialogs/Dialogs";

let rernderEntireTree = () =>{
  console.log('Render')
}



export type StateType = {
    profilePage: {
      newPostText: string;
      post: PostType[];
    };
    dialogsPage: DialogsType;
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


let state = {
  profilePage: {
    newPostText:'IT KAMASUTRA',
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
  },
};

// window.state = state


export const addPost = (message: string) => {
  const newMessage = { id: v1(), message, likesCount: 0 };
  console.log(newMessage);
  state.profilePage.post.push(newMessage);
  rernderEntireTree()
};

export const updateNewPostText = (newText:string)=>{
  state.profilePage.newPostText = newText
  rernderEntireTree();
}

export const subscribe=(observer:()=>void)=>{
  rernderEntireTree = observer; // observer
}


export default state;
