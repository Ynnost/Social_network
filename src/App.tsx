import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { StoreType } from "./Redux/store";
import DialogsConteiner from "./components/Dialogs/DialogsContainer";

export type PropsStateType = {
  store: StoreType;
};

const App: React.FC<PropsStateType> = (props) => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs/*" element={<DialogsConteiner />} />
          <Route path="news" />
          <Route path="recipes" />
          <Route path="setting" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
