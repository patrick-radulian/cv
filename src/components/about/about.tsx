import React from "react";
import styles from "./about.module.css";

const About: React.FC = () => {
    return (
        <React.Fragment>
            <h1 className={styles.title}>About</h1>
            <p className={styles.content}>
                I am a UI/UX designer with an <em>extraordinary technical foundation</em>, counting over 12 years of
                front-end engineering experience - 8 of them working on <em>enterprise level applications</em> - and 3
                years of UI/UX design experience.
            </p>
            <p className={styles.content}>
                My defining traits are <em>strong visual intelligence</em>, highly developed empathy, a very analytical
                approach, <em>excellent communication skills</em>, and a special ability to combine design and
                technology perspectives.
            </p>
        </React.Fragment>
    );
};

export default About;
