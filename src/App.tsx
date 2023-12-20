import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SuperDialogsConteiner from "./components/Dialogs/DialogsConteiner";
import Users from "./components/Users/Users";
import UsersConteiner from "./components/Users/UsersContainer";

const App = () => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs/*" element={<SuperDialogsConteiner />} />
          <Route path="users" element={<UsersConteiner />} />
          <Route path="recipes" />
          <Route path="setting" />
        </Routes>
      </div>
    </div>
  );
};

export default App;

