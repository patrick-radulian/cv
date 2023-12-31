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
        <div className={styles.grid}>
            <div className={`${styles.box} ${styles.about}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>About</div>
            </div>
            <div className={`${styles.box} ${styles.portrait}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Portrait</div>
            </div>
            <div className={`${styles.box} ${styles["fe-xp"]}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>FE-XP</div>
            </div>
            <div className={`${styles.box} ${styles.name}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Name</div>
            </div>
            <div className={`${styles.box} ${styles.github}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Github</div>
            </div>
            <div className={`${styles.box} ${styles.codepen}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Codepen</div>
            </div>
            <div className={`${styles.box} ${styles.portfolio}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Portfolio</div>
            </div>
            <div className={`${styles.box} ${styles.experience}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Experience</div>
            </div>
            <div className={`${styles.box} ${styles.skills}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>Skills</div>
            </div>
            <div className={`${styles.box} ${styles["ux-xp"]}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>UX-XP</div>
            </div>
        </div>
    );
};

export default Resume;
