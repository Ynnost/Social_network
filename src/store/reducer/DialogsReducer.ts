import { v1 } from "uuid";
import { DialogsType, DispatchActionType } from "../../type";



const initialState: DialogsType = {
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
};

export const dialogsReducer = (state: DialogsType = initialState, action: DispatchActionType): DialogsType => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY": {
      return {
        ...state,
        newMessageBoody: action.newTextBoody,
      };
    }
    case "SEND-MESSAGE": {
      let body = { id: v1(), message: state.newMessageBoody };
      const data = [...state.message, body];
      state.newMessageBoody = "";
      return {
        ...state,
        message: data,
      };
    }

    default:
      return state;
  }
};
