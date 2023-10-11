import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs, { DialogsType } from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";


export type DataType = {
  state: {
    profilePage: {
      post: PostType[];
    };
    dialogsPage: DialogsType;
  };
  addPost: (message: string) => void;
};

export type PostType = {
  id: string;
  message: string;
  likesCount: number;
};

export type DialogsItemType = {
  id: string;
  name: string;
  to: string;
};

export type MessagesType = {
  id: string;
  message: string;
};



const App = (props: DataType) => {
  return (
    <BrowserRouter>
      <div className={"app-wrapper"}>
        <Header />
        <NavBar />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="profile"
              element={<Profile post={props.state.profilePage.post} addPost={props.addPost} />}
            />
            <Route
              path="dialogs/*"
              element={
                <Dialogs
                  dialogs={props.state.dialogsPage.dialogs}
                  message={props.state.dialogsPage.message}
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
