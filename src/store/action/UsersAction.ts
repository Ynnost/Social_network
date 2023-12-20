import { FollowAC, UnfollowAC } from "../../type/actionType/UsersActionType";
import { UsersAPIType } from "../../type/componentType/usersType";

export const followAC = (userID: number): FollowAC =>
  ({
    type: "FOLLOW",
    userID,
  } as const);

export const unfollowAC = (userID: number): UnfollowAC =>
  ({
    type: "UNFOLLOW",
    userID,
  } as const);

export type SetUsersAC = { type: "SET_USERS"; items: UsersAPIType[] };

export const setUsersAC = (items: UsersAPIType[]): SetUsersAC =>
  ({
    type: "SET_USERS",
    items,
  } as const);
