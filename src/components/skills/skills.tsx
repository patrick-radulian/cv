import React from "react";
import styles from "./skills.module.css";
import PRESENTING from "src/images/skills/Presenting.svg";
import PROTOTYPING from "src/images/skills/Prototyping.svg";
import DT from "src/images/skills/DesignThinking.svg";
import INTERVIEWING from "src/images/skills/Interviewing.svg";
import STORYTELLING from "src/images/skills/StoryTelling.svg";
import USERRESEARCH from "src/images/skills/UserResearch.svg";

const Skills: React.FC = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.skill}>
                <img src={PRESENTING} alt="" loading="lazy" />
                <span className={styles.label}>Presenting</span>
            </div>
            <div className={styles.skill}>
                <img src={PROTOTYPING} alt="" loading="lazy" />
                <span className={styles.label}>Presenting</span>
            </div>
            <div className={styles.skill}>
                <img src={DT} alt="" loading="lazy" />
                <span className={styles.label}>Design Thinking</span>
            </div>
            <div className={styles.skill}>
                <img src={INTERVIEWING} alt="" loading="lazy" />
                <span className={styles.label}>Interviewing</span>
            </div>
            <div className={styles.skill}>
                <img src={STORYTELLING} alt="" loading="lazy" />
                <span className={styles.label}>Story Telling</span>
            </div>
            <div className={styles.skill}>
                <img src={USERRESEARCH} alt="" loading="lazy" />
                <span className={styles.label}>User Research</span>
            </div>
        </div>
    );
};

export default Skills;
