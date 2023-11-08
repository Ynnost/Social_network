import { v1 } from "uuid";
import { DialogsType, DispatchActionType } from "./store";

export type UpdateNewMessageBodyActionCreator = {
  type: "UPDATE-NEW-MESSAGE-BODY";
  newTextBoody: string;
};

export type SendNewMessageBodyActionCreator = {
  type: "SEND-MESSAGE";
};

export const dialogsReducer = (
  state: DialogsType,
  action: DispatchActionType
) => {
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

export let updateNewMessageBodyActionCreator = (
  newTextBoody: string
): UpdateNewMessageBodyActionCreator => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    newTextBoody,
  };
};

export let sendNewMessageBodyActionCreator =
  (): SendNewMessageBodyActionCreator => {
    return {
      type: "SEND-MESSAGE",
    };
  };
