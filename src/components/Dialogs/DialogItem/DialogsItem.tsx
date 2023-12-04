import { DialogsItemType } from "../../../type";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";


export const DialogItem = (props: DialogsItemType) => {
  return (
    <li>
      <NavLink className={({ isActive }) => (isActive ? s.active : s.dialogsItem)} id={props.id} to={props.to}>
        {props.name}
      </NavLink>
    </li>
  );
};
