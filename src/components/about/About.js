import React from 'react';
import GradientDivider from '../divider/GradientDivider';
import Title from '../title/Title';
import classes from './styles.module.css';

function About() {
    return (
        <div className={classes.aboutContainer}>
            <Title title="About Me" />
            <p className={classes.description}>
                I am an iOS Engineer based in Daly City, CA. I have a B.S in Computer Science
                from the University of California, Davis. I have passion for building mobile applications
                end to end. I am a product first engineer who does not sacrifice quality.
                I love learning new things and about how they work. Being able to build mobile applications that positively impact peoples lives
                anywhere they are is what motivates me.
            </p>
            <GradientDivider />
        </div>
    )
}

export default About;