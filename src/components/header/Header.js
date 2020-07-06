import React from 'react';
import { Avatar } from '@material-ui/core';
import KormanPicture from '../../assets/me.jpeg';
import classes from './styles.module.css';

function Header() {
    return (
        <div className={classes.headerContainer}>
            <Avatar className={classes.avatar} src={KormanPicture} variant="circle" />
            <p id={classes.name}>Korman Chen</p>
        </div>
    )
}

export default Header;