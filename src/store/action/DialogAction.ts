import { SendNewMessageBodyActionCreator, UpdateNewMessageBodyActionCreator } from "../../type/actionType";

export let updateNewMessageBodyActionCreator = (newTextBoody: string): UpdateNewMessageBodyActionCreator =>
  ({
    type: "UPDATE-NEW-MESSAGE-BODY",
    newTextBoody,
  } as const);

export let sendNewMessageBodyActionCreator = (): SendNewMessageBodyActionCreator =>
  ({
    type: "SEND-MESSAGE",
  } as const);
