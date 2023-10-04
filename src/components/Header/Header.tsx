import React from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.img}
                src='https://sun9-70.userapi.com/impg/w0rQGoh8J6WxhT28fGY7XWgWGXA8lsUbGlSg4g/vpdVhzaUA0o.jpg?size=1280x768&quality=95&sign=643cf46a95ad2e476794fdc28c534578&type=album'  alt={""}/>
        </header>
    );
};

export default Header;