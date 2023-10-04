import React from 'react';
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";


type DialogItemType = {
    to: string
    name: string
    id: string
}
export const DialogItem = (props: DialogItemType) => {
    return (
        <li>
            <NavLink className={({isActive}) => isActive ? s.active : s.dialogsItem} id={props.id}
                     to={props.to}>{props.name}</NavLink>
        </li>
    )
}


