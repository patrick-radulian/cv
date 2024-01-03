import React from "react";
import styles from "./skills.module.css";
import PRESENTING from "src/images/icons/Presenting.svg";
import PROTOTYPING from "src/images/icons/Prototyping.svg";
import DT from "src/images/icons/DesignThinking.svg";
import INTERVIEWING from "src/images/icons/Interviewing.svg";
import STORYTELLING from "src/images/icons/StoryTelling.svg";
import USERRESEARCH from "src/images/icons/UserResearch.svg";
import ImageLink from "components/image-link/image-link";

const Skills: React.FC = () => {
    return (
        <div className={styles.skills}>
            <ImageLink src={PRESENTING} label="Presenting" />
            <ImageLink src={PROTOTYPING} label="Prototyping" />
            <ImageLink src={DT} label="Design Thinking" />
            <ImageLink src={INTERVIEWING} label="Interviewing" />
            <ImageLink src={STORYTELLING} label="Story Telling" />
            <ImageLink src={USERRESEARCH} label="User Research" />
        </div>
    );
};

export default Skills;
