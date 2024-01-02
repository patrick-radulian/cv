import React from "react";
import styles from "./web.module.css";
import HTML from "src/images/skills/HTML.svg";
import CSS from "src/images/skills/CSS.svg";
import REACT from "src/images/skills/React.svg";
import TS from "src/images/skills/TS.svg";

const Web: React.FC = () => {
    return (
        <div className={styles["web-skills"]}>
            <div className={styles["web-skill"]}>
                <img src={HTML} alt="" loading="lazy" />
                <span className={styles.label}>HTML</span>
            </div>
            <div className={styles["web-skill"]}>
                <img src={CSS} alt="" loading="lazy" />
                <span className={styles.label}>CSS</span>
            </div>
            <div className={styles["web-skill"]}>
                <img src={REACT} alt="" loading="lazy" />
                <span className={styles.label}>React</span>
            </div>
            <div className={styles["web-skill"]}>
                <img src={TS} alt="" loading="lazy" />
                <span className={styles.label}>TypeScript</span>
            </div>
        </div>
    );
};

export default Web;
