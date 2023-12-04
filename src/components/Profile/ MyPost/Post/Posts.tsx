import React from "react";
import c from "./Posts.module.css";
import { PostType } from "../../../../type";


export const Post = (props: PostType) => {
  return (
    <div className={c.item}>
      <img src="https://bigpicture.ru/wp-content/uploads/2014/10/harddrinking34.jpg" alt="" /> {props.message}
      <div className={c.like}>
        <i className={c.likeWo}></i> <i className={c.likeWa}></i>
        {props.likesCount}
      </div>
    </div>
  );
};


