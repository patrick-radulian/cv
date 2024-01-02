import React from "react";
import styles from "./web.module.css";
import HTML from "src/images/skills/HTML.svg";
import CSS from "src/images/skills/CSS.svg";
import REACT from "src/images/skills/React.svg";
import TS from "src/images/skills/TS.svg";

const Web: React.FC = () => {
    return (
        <div className={styles["web-skills"]}>
            <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" className={styles["web-skill"]} target="_blank">
                <img src={HTML} alt="" loading="lazy" />
                <span className={styles.label}>HTML</span>
            </a>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" className={styles["web-skill"]} target="_blank">
                <img src={CSS} alt="" loading="lazy" />
                <span className={styles.label}>CSS</span>
            </a>
            <a href="https://react.dev/" className={styles["web-skill"]} target="_blank">
                <img src={REACT} alt="" loading="lazy" />
                <span className={styles.label}>React</span>
            </a>
            <a href="https://www.typescriptlang.org/" className={styles["web-skill"]} target="_blank">
                <img src={TS} alt="" loading="lazy" />
                <span className={styles.label}>TypeScript</span>
            </a>
        </div>
    );
};

export default Web;
