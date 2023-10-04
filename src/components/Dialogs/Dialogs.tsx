import React from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsItemType, MessagesType} from "../../App";


export type DialogsType = {
    dialogs:DialogsItemType[],
    message:MessagesType[],
}

const Dialogs = (props:DialogsType) => {

    return (
        <ul className={s.dialogs}>
            <div className={s.dialogsItem}>
                {props.dialogs.map(el=><DialogItem to={el.to} name={el.name} id={el.id}/>)}
            </div>
            <div className={s.massages}>
                {props.message.map(el=><Message id={el.id} message={el.message}/>)}
            </div>
        </ul>
    );
};

export default Dialogs;