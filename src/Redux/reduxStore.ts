import { combineReducers, legacy_createStore } from "redux";
import { dialogsReducer } from "./DialogsReducer";
import { profileReducer } from "./ProfileReducer";


const rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
});

export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;