import React from "react";
import Portrait from "src/images/Portrait.png";
import styles from "./resume.module.css";

const Resume: React.FC = () => {
    return (
        <div className={styles.grid}>
            <div className={`${styles.box} ${styles.about}`}>
                <div className={styles["box-bg"]}></div>
                <div className={styles["box-content"]}>About</div>
            </div>
            <div className={`${styles.box} ${styles.portrait}`}>
                <div className={styles["portrait-background"]}>
                    <div className={styles["box-bg"]}></div>
                    <div className={styles["box-content"]}></div>
                </div>

                <div className={styles["portrait-image"]}>
                    <img src={Portrait} alt="Portrait" />
                </div>
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
