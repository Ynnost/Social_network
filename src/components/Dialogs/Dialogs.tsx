import { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { DialogsItemType, MessagesType } from "../../Redux/store";
import { Message } from "./Message/Message";

export type DialogType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody: string;
  updateNewMessageBody: (newMessageBoody: string) => void;
  sendNewMessageBody: () => void;
};

const Dialogs = (props: DialogType) => {
  
  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(e.currentTarget.value);
  };

  const addMessage = () => {
    props.sendNewMessageBody();
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
