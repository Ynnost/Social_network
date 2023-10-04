import React from 'react';
import s from './NavBar.module.css'
import MenuItem from "./MenuItem/MenuItem";



const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className="sub-menu">
                <MenuItem name={'Profile'} to={'/profile'}/>
                <MenuItem name={'Messages'} to={'/dialogs'}/>
                <MenuItem name={'News'} to={'/news'}/>
                <MenuItem name={'Recipes'} to={'/recipes'}/>
                <MenuItem name={'Setting'} to={'/setting'}/>
            </ul>
        </nav>
);
};

export default NavBar;
