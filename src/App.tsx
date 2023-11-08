import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { StoreType } from "./Redux/store";
import DialogsConteiner from "./components/Dialogs/DialogsContainer";

export type PropsType = {
  store: StoreType;
};

const App: React.FC<PropsType> = (props) => {

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
                  store={props.store}
                  dispatch={props.store.dispatch.bind(props.store)}
                />
              }
            />
            <Route
              path="dialogs/*"
              element={
                <DialogsConteiner
                  store={props.store}
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
