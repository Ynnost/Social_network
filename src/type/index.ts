import { SetUsersAC } from "../store/action/UsersAction";
import {
  AddPostActionCreator,
  FollowAC,
  SendNewMessageBodyActionCreator,
  UnfollowAC,
  UpdateNewMessageBodyActionCreator,
  UpdateNewPostActionCreator,
} from "./actionType";

export type { DialogsType, DialogsItemType, MessagesType } from "./componentType/dialogsType";

export type { ProfileType, PostType } from "./componentType/profileType";

export type { PropsStateType, StoreType, StateType } from "./state";

export type { UsersType, UsersAPIType } from "./componentType/usersType";

export type DispatchActionType =
  | UpdateNewMessageBodyActionCreator
  | SendNewMessageBodyActionCreator
  | AddPostActionCreator
  | UpdateNewPostActionCreator
  | FollowAC
  | UnfollowAC
  | SetUsersAC;
