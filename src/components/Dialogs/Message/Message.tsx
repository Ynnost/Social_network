import React from 'react';
import s from './../Dialogs.module.css'


type MessageType = {
    id:string,
    message:string,
}
export const Message = (props: MessageType) => {
    return (
        <li className={s.massage}>{props.message}</li>
    )
}

