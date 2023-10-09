import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogsItemType, MessagesType } from "../../App";

export type DialogsType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
};

const Dialogs = (props: DialogsType) => {
 let text = ''
 const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
   return text = e.currentTarget.value;
 };

 const addmessege = () => {
   console.log(text);
 };


  return (
    <div>
      <div>
        <textarea onChange={onChangeText}> </textarea>
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
