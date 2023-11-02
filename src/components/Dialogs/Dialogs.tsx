import React, { ChangeEvent, useState } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import {
  DialogsItemType,
  DispatchActionType,
  MessagesType,
  updateNewMessageBodyActionCreator,
} from "../../Redux/State";

export type DialogType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody: string;
  dispatch: (action: DispatchActionType) => void;
};

const Dialogs = (props: DialogType) => {
  const [newMessage, setNewMessage] = useState(props.newMessageBoody);

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewMessage(e.currentTarget.value);
  };

  const addmessege = () => {
    props.dispatch(updateNewMessageBodyActionCreator(newMessage));
    setNewMessage("");
  };

  return (
    <div>
      <ul className={s.dialogs}>
        <div className={s.dialogsItem}>
          {props.dialogs.map((el, i) => (
            <DialogItem key={i} to={el.to} name={el.name} id={el.id} />
          ))}
        </div>
        <div className={s.massages}>
          {props.message.map((el, i) => (
            <Message key={i} id={el.id} message={el.message} />
          ))}
          <div>
            <textarea
              value={newMessage}
              placeholder="Enter your message"
              onChange={onChangeText}
            >
              {" "}
            </textarea>
          </div>
          <button onClick={addmessege}>Add messege</button>
        </div>
      </ul>
    </div>
  );
};

export default Dialogs;
