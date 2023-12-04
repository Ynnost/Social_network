import { DialogsType, DispatchActionType, ProfileType } from ".";


export type PropsStateType = {
  store: StoreType;
};

export type StoreType = {
  _state: StateType;
  subscribe: (observer: () => void) => void;
  _rernderEntireTree: () => void;
  getState: () => StateType;
  dispatch: (action: DispatchActionType) => void;
};

export type StateType = {
  profilePage: ProfileType;
  dialogsPage: DialogsType;
};