import React, { ChangeEvent, useState } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogsItemType, MessagesType } from "../../Redux/State";


export type DialogsType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
};

const Dialogs = (props: DialogsType) => {

const [newMessage, setNewMessage] = useState("");

 const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
   setNewMessage(e.currentTarget.value);
 };

 const addmessege = () => {
   console.log(newMessage);
   setNewMessage('')
 };


  return (
    <div>
      <div>
        <textarea value={newMessage} onChange={onChangeText}>
          {" "}
        </textarea>
      </div>
      <button onClick={addmessege}>Add messege</button>
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
        </div>
      </ul>
    </div>
  );
};

export default Dialogs;
