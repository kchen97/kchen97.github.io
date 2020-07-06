import React from 'react';
import classes from './styles.module.css';

function Title(props) {
    return (
        <div className={classes.sectionContainer}>
            <p className={classes.title}>{props.title}</p>
        </div>
    )
}

export default Title;