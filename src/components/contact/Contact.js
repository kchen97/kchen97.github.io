import React from 'react'
import Title from '../title/Title';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';
import classes from './styles.module.css';

const useStyles = makeStyles({
    icon: {
        paddingRight: 20,
        color: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
    },
})

function Contact() {
    const styles = useStyles();

    return (
        <div className={classes.contactContainer}>
            <Title title="Let's Connect" />
            <div id={classes.iconsContainer}>
                <a href="https://github.com/kchen97">
                    <GitHubIcon className={styles.icon} color="primary" fontSize="large"/>
                </a>
                <a href="https://github.com/kchen97">
                    <LinkedInIcon className={styles.icon} color="primary" fontSize="large"/>
                </a>
            </div>
        </div>
    )
}

export default Contact;