import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";


// @ts-ignore
const App = () => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    <Routes>
                    <Route path='dialogs' element={<Dialogs/>}/>
                    <Route path='profile' element={<Profile/>}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
