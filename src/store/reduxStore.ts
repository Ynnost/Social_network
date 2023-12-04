import { combineReducers, legacy_createStore } from "redux";
import { dialogsReducer } from "./reducer/DialogsReducer";
import { profileReducer } from "./reducer/ProfileReducer";
import { v1 } from "uuid";

const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
});

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
