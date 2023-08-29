import React from 'react';
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>Profile</div>
            <div className={classes.item}>Messages</div>
            <div className={classes.item}>News</div>
            <div className={classes.item}>Music</div>
            <div className={classes.item}>Setting</div>
        </nav>
    );
};

export default NavBar;