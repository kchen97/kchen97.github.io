import React from 'react'
import Title from '../title/Title';
import { TextField } from '@material-ui/core';
import classes from './styles.module.css';

function Contact() {
    return (
        <div className={classes.contactContainer}>
            <Title title="Contact Me" />
        </div>
    )
}

export default Contact;