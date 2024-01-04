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
            <ImageLink src={PRESENTING} to="" label="Presenting" />
            <ImageLink src={PROTOTYPING} to="" label="Prototyping" />
            <ImageLink src={DT} to="" label="Design Thinking" />
            <ImageLink src={INTERVIEWING} to="" label="Interviewing" />
            <ImageLink src={STORYTELLING} to="" label="Story Telling" />
            <ImageLink src={USERRESEARCH} to="" label="User Research" />
        </div>
    );
};

export default Skills;
