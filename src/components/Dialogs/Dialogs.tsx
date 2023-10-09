import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogsItem";
import { Message } from "./Message/Message";
import { DialogsItemType, MessagesType } from "../../App";

export type DialogsType = {
  dialogs: DialogsItemType[];
  message: MessagesType[];
};

const Dialogs = (props: DialogsType) => {
  return (
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
  );
};

export default Dialogs;
