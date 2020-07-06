import React from 'react';
import Title from '../title/Title';
import GradientDivider from '../divider/GradientDivider';
import classes from './styles.module.css';

function Skills() {
    return (
        <div className={classes.skillsContainer}>
            <Title title="Skills" />
            <div className={classes.skillContainer}>
                <div className={classes.skillItem}>
                    <p className={classes.skillTitle} className={classes.skillTitle}>Languages</p>
                    <p className={classes.skillList}>Swift, Objective-C, Java, Javascript, CSS, HTML</p>
                </div>

                <div className={classes.skillItem}>
                    <p className={classes.skillTitle}>Frameworks</p>
                    <p className={classes.skillList}>UIKit, SwiftUI, Spring, React, Express.js, Node.js, Socket.io</p>
                </div>

                <div className={classes.skillItem}>
                    <p className={classes.skillTitle}>Databases</p>
                    <p className={classes.skillList}>MongoDB, Cassandra, DynamoDB</p>
                </div>

                <div className={classes.skillItem}>
                    <p className={classes.skillTitle}>Cloud Services</p>
                    <p className={classes.skillList}>AWS EC2, AWS Lambda, AWS Elastic Beanstalk, AWS API Gateway, Google Firestore</p>
                </div>

                <div className={classes.skillItem}>
                    <p className={classes.skillTitle}>Other</p>
                    <p className={classes.skillList}>Agile, Scrum, Git</p>
                </div>
            </div>
            <GradientDivider />
        </div>
    )
}

export default Skills;