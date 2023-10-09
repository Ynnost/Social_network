import React from "react";
import c from "./Posts.module.css";

type PropsType = {
  message: string;
  likesCount: number;
};

const Profile = (props: PropsType) => {
  return (
    <div className={c.item}>
      <img
        src="https://bigpicture.ru/wp-content/uploads/2014/10/harddrinking34.jpg"
        alt=""
      />{" "}
      {props.message}
      <div className={c.like}>
        <i className={c.likeWo}></i> <i className={c.likeWa}></i>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Profile;
