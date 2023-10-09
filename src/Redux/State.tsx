import { v1 } from "uuid";

let state = {
  profilePage: {
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


export const addPost = (message: string) => {
  const newMessage = { id: v1(), message, likesCount: 0 };
  return state.profilePage.post = [newMessage, ...state.profilePage.post];
};



export default state;
