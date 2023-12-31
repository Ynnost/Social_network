import { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogsPagePropsType } from "./DialogsConteiner";
import { DialogsItemType, MessagesType } from "../../type";

export type DialogType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
  newMessageBoody: string;
  updateNewMessageBody: (newMessageBoody: string) => void;
  sendNewMessageBody: () => void;
};

const Dialogs = (props: DialogsPagePropsType) => {
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
          {props.dialogsPage.dialogs.map((el, i) => (
            <DialogItem key={i} to={el.to} name={el.name} id={el.id} />
          ))}
        </div>
        <div className={s.massages}>
          {props.dialogsPage.message.map((el, i) => (
            <Message key={i} id={el.id} message={el.message} />
          ))}
          <div>
            <textarea value={props.dialogsPage.newMessageBoody} placeholder="Enter your message" onChange={onChangeText}>
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
