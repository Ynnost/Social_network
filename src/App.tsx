import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Dialogs from "./components/Dialogs/Dialogs";


// @ts-ignore
const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <NavBar/>
            <div className='app-wrapper-content'>
                <Dialogs/>
                {/*<Profile/>*/}
            </div>
        </div>
    );
}

export default App;
