import React from "react";
import Header from "components/header/header";
import About from "components/about/about";
import WorkExperience from "components/work-experience/work-experience";
import Education from "components/education/education";
import Skills from "components/skills/skills";
import Profiles from "components/profiles/profiles";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
    return (
        <React.Fragment>
            <Header />
            <About />
            <WorkExperience />

            <div className={styles["education-and-skills"]}>
                <Education />
                <Skills />
            </div>

            <Profiles />
        </React.Fragment>
    );
};

export default Resume;
