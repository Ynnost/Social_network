import  { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import {
  DialogsItemType,
  DispatchActionType,
  MessagesType,
} from "../../Redux/State";
import { sendNewMessageBodyActionCreator, updateNewMessageBodyActionCreator } from "../../Redux/DialogsReducer";
import { Message } from "./Message/Message";

export type DialogType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody: string;
  dispatch: (action: DispatchActionType) => void;
};

const Dialogs = (props: DialogType) => {

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyActionCreator(e.currentTarget.value));
    console.log(e.currentTarget.value);
  };

  const addMessage = () => {
    props.dispatch(sendNewMessageBodyActionCreator());
    console.log(props.message);
    console.log(props.dialogs);
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
              value={props.newMessageBoody}
              placeholder="Enter your message"
              onChange={onChangeText}
            >
              {" "}
            </textarea>
          </div>
          <button onClick={addMessage}>Add messege</button>
        </div>
      </ul>
    </div>
  );
};

export default Dialogs;
