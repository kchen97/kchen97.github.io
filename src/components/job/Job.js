import React from 'react';
import classes from './styles.module.css';

function Job(props) {
    return (
        <div className={classes.jobContainer}>
            <div className={classes.infoContainer}>
                <p id={classes.company}>{props.company}</p>
                <p id={classes.role}>{props.role}</p>
            </div>
            <p id={classes.date}>{props.date}</p>
        </div>
    )
}

export default Job;