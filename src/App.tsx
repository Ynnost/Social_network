import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { StoreType } from "./Redux/State";


export type PropsType = {
 store:StoreType
};

const App:React.FC<PropsType> = (props) => {

const store = props.store.getState()

  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="profile"
              element={
                <Profile
                  post={store.profilePage.post}
                  dispatch={props.store.dispatch.bind(props.store)}
                  newPostText={store.profilePage.newPostText}
                />
              }
            />
            <Route
              path="dialogs/*"
              element={
                <Dialogs
                  dialogs={store.dialogsPage.dialogs}
                  message={store.dialogsPage.message}
                  newMessageBoody={store.dialogsPage.newMessageBoody}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              }
            />
            <Route path="news" />
            <Route path="recipes" />
            <Route path="setting" />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
