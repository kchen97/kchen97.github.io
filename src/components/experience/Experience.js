import React from 'react';
import Title from '../title/Title';
import Job from '../job/Job';
import GradientDivider from '../divider/GradientDivider';
import classes from './styles.module.css';

function Experience() {    
    let jobs = [
        {
            company: "Macy's Technology",
            role: "Software Engineer Intern",
            date: "June 2019 - September 2019"
        },
        {
            company: "Edelman Financial Engines",
            role: "Software Engineer Intern",
            date: "June 2018 - September 2018"
        },
        {
            company: "GMDY",
            role: "Software Engineer Intern",
            date: "March 2018 - June 2018"
        }
    ]

    return (
        <div className={classes.experienceContainer}>
            <Title title="Work Experience" />
            {
                jobs.map(job => {
                    return (
                        <Job company={job.company} role={job.role} date={job.date} />
                    )
                })
            }
            <GradientDivider />
        </div>
    )
}

export default Experience;