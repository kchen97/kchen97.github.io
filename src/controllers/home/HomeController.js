import React from 'react';
import Header from '../../components/header/Header';
import About from '../../components/about/About';
import Experience from '../../components/experience/Experience';
import Project from '../../components/project/Project';
import Skills from '../../components/skills/Skills';
import Contact from '../../components/contact/Contact';
import classes from './styles.module.css';

function HomeController() {
    return (
        <div className={classes.homeContainer}>
            <Header />
            <About />
            <Experience />
            <Project />
            <Skills />
            <Contact />
        </div>
    )
}

export default HomeController;