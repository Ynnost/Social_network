import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import SuperDialogsConteiner from "./components/Dialogs/DialogsConteiner";

const App = () => {
  return (
    <div className={"app-wrapper"}>
      <Header />
      <NavBar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="profile" element={<Profile />} />
          <Route path="dialogs/*" element={<SuperDialogsConteiner />} />
          <Route path="news" />
          <Route path="recipes" />
          <Route path="setting" />
        </Routes>
      </div>
    </div>
  );
};

export default App;

// export type PropsStateType = {
//   store: StoreType;
// };

// const App: React.FC<PropsStateType> = () => {
//   return (
//     <div className={"app-wrapper"}>
//       <Header />
//       <NavBar />
//       <div className="app-wrapper-content">
//         <Routes>
//           <Route path="profile" element={<Profile />} />
//           <Route path="dialogs/*" element={<DialogsConteiner />} />
//           <Route path="news" />
//           <Route path="recipes" />
//           <Route path="setting" />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default App;
