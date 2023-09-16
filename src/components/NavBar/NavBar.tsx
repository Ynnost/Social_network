import React from 'react';
import s from './NavBar.module.css'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile'
                         className={({isActive}) => isActive ? s.activeLink : ""}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({isActive}) => isActive ? s.activeLink : ""}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({isActive}) => isActive ? s.activeLink : ""}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({isActive}) => isActive ? s.activeLink : ""}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/setting' className={({isActive}) => isActive ? s.activeLink : ""}>Setting</NavLink>
            </div>
        </nav>
    );
};

export default NavBar;