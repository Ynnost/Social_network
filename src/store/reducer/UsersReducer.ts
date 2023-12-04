import { v1 } from "uuid";
import { DispatchActionType, UsersType } from "../../type";

const initialState: UsersType = {
  users: [
    {
      id: v1(),
      followed: true,
      fullName: "Denis",
      status: "I am a boss",
      location: {
        citi: "NigNov",
        country: "Russia",
      },
    },
    {
      id: v1(),
      followed: false,
      fullName: "Ivan",
      status: "I am a brother",
      location: {
        citi: "NigNov",
        country: "Russha",
      },
    },
    {
      id: v1(),
      followed: true,
      fullName: "Ira",
      status: "I am a wife",
      location: {
        citi: "NigNov",
        country: "Russha",
      },
    },
    {
      id: v1(),
      followed: true,
      fullName: "Any",
      status: "I am a daughter",
      location: {
        citi: "NigNov",
        country: "Russha",
      },
    },
  ],
};

export const usersReducer = (state: UsersType = initialState, action: DispatchActionType): UsersType => {
  switch (action.type) {
    case "FOLLOW": {
      return { ...state, users:[...state.users.map(u=> u.id === action.userID ? {...u, followed:true} : u)] };
    }
    case "UNFOLLOW":
    default:{
      return { ...state };
    }
      return state;
  }
};
