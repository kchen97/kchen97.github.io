import React from 'react';
import GradientDivider from '../divider/GradientDivider';
import Title from '../title/Title';
import classes from './styles.module.css';

function About() {
    return (
        <div className={classes.aboutContainer}>
            <Title title="About Me" />
            <p className={classes.description}>
                Consectetur in ex dolor fugiat irure tempor esse minim laboris. Incididunt irure ipsum veniam ex consectetur sint occaecat consectetur nostrud consectetur amet aliqua officia. Ut veniam est et cillum. Ex aute incididunt veniam laboris id dolor reprehenderit mollit ut esse aliquip. Dolor nulla nisi sunt ea occaecat laboris ut est. Deserunt nulla ipsum dolore elit aliqua dolore. Tempor Lorem ullamco do ea nisi consequat.

Eu occaecat nostrud excepteur ex. Id id sunt ullamco aliquip tempor consectetur. Ad officia sint veniam reprehenderit reprehenderit ut fugiat nulla magna adipisicing deserunt consequat incididunt deserunt. Sunt aliqua pariatur labore in sunt deserunt est mollit do amet. Commodo ipsum laborum est reprehenderit nisi sit nisi aute aliqua esse commodo veniam. Veniam magna minim ea cillum. Et duis do do aute eiusmod ea nostrud mollit reprehenderit veniam dolore voluptate veniam pariatur.

Velit quis duis deserunt commodo ex quis adipisicing in. Incididunt labore do dolor dolor fugiat nulla est qui cillum. Ad et anim proident ex minim.
            </p>
            <GradientDivider />
        </div>
    )
}

export default About;