import s from "./MenuItem.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

export type MenuItemType ={
    name:string
    to:string
}

export const MenuItem = (props:MenuItemType) => {
    return(
        <li className={s.li}>
            <NavLink to={props.to} className={({isActive}) => isActive ? s.activeLi : ""}>{props.name}</NavLink>
        </li>
    )
}

export default MenuItem