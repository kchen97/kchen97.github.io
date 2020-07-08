import React from 'react';
import Title from '../title/Title';
import { Card, CardHeader, CardContent, CardActions, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import GradientDivider from '../divider/GradientDivider';
import classes from './styles.module.css';

const useStyles = makeStyles({
    card: {
        width: 250,
        background: 'radial-gradient( circle farthest-corner at 12.3% 19.3%,  rgba(85,88,218,1) 0%, rgba(95,209,249,1) 100.2% )'
    },
    cardHeader: {
        color: 'white'
    },
    cardContent: {
        color: 'white'
    },
    button: {
        color: 'white',
        background: 'rgb(0, 0, 0, 0.6)'
    },
    github: {
        width: 40,
        height: 40
    }
})

function Project() {
    const styles = useStyles();

    return (
        <div className={classes.projectContainer}>
            <Title title="Projects" />
            <div className={classes.cardContainer}>
                <Card className={styles.card} >
                    <CardHeader className={styles.cardHeader} title="GradeKit" />
                    <CardContent className={styles.cardContent}>
                        <p>GradeKit is a simple gpa and grade calculator. It is built using Swift, UIKit, CoreData, CloudKit, and VIPER.</p>
                    </CardContent>
                    <CardActions>
                        <Button className={styles.button} color="primary" variant="contained" href="https://apps.apple.com/app/id1516769736">
                            Download
                        </Button>
                    </CardActions>
                </Card>

                <Card className={styles.card} >
                    <CardHeader className={styles.cardHeader} title="RestaurantTinder" />
                    <CardContent className={styles.cardContent}>
                        <p>RestaurantTinder is a real-time tournament web application that helps groups decide what to eat. It is built with React, MongoDB, Express, Node.js, and Socket.io.</p>
                    </CardContent>
                    <CardActions>
                        <Button className={styles.button} color="primary" variant="contained" href="https://restaurant-tournament.herokuapp.com/">
                            Visit
                        </Button>
                        <Button className={styles.button} color="primary" variant="contained" href="https://github.com/restaurant-tinder/restaurant-tinder">
                            Github
                        </Button>
                    </CardActions>
                </Card>
            </div>
            <GradientDivider />
        </div>
    )
}

export default Project;