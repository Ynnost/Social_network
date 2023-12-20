import { v1 } from "uuid";
import { DispatchActionType, UsersType } from "../../type";

const initialState: UsersType = {
  items: [],
};

export const usersReducer = (state: UsersType = initialState, action: DispatchActionType): UsersType => {
  switch (action.type) {
    case "FOLLOW": {
      return { ...state, items: [...state.items.map((u) => (u.id === action.userID ? { ...u, followed: true } : u))] };
    }
    case "UNFOLLOW": {
      return { ...state, items: [...state.items.map((u) => (u.id === action.userID ? { ...u, followed: false } : u))] };
    }
    case "SET_USERS": {
      return { ...state, items: [...action.items] };
    }
    default:
      return state;
  }
};
