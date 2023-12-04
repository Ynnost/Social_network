import { AddPostActionCreator, UpdateNewPostActionCreator } from "../../type/actionType";

export let addPostActionCreator = (): AddPostActionCreator =>
  ({
    type: "ADD-POST",
  } as const);

export let updateNewPostActionCreator = (newText: string): UpdateNewPostActionCreator =>
  ({
    type: "UPDATE-NEW-POST-TEXT",
    newText,
  } as const);
