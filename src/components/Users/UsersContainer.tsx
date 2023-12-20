import React from "react";
import { AppRootStateType } from "../../store/reduxStore";
import { Dispatch } from "redux";
import { followAC, setUsersAC, unfollowAC } from "../../store/action";
import { UsersAPIType, UsersType } from "../../type";
import { connect } from "react-redux";
import Users from "./Users";

type MapStateToProps = {
  users: UsersType;
};

type MapDicpatchToPropsType = {
  follow: (userID: number) => void;
  unfollow: (userID: number) => void;
  setUsers: (items: UsersAPIType[]) => void;
};

export type UsersPagePropsType = MapStateToProps & MapDicpatchToPropsType;

const mapStateToProps = (state: AppRootStateType): MapStateToProps => {
  return {
    users: state.userPage,
  };
};

const mapDicpatchToProps = (dispatch: Dispatch): MapDicpatchToPropsType => {
  return {
    follow: (userID: number) => {
      dispatch(followAC(userID));
    },
    unfollow: (userID: number) => {
      dispatch(unfollowAC(userID));
    },
    setUsers: (items: UsersAPIType[]) => {
      dispatch(setUsersAC(items));
    },
  };
};

export default connect(mapStateToProps, mapDicpatchToProps)(Users);
