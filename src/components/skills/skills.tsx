import React from "react";
import "./skills.css";
import PRESENTING from "src/images/icons/Presenting.svg";
import PROTOTYPING from "src/images/icons/Prototyping.svg";
import DT from "src/images/icons/DesignThinking.svg";
import INTERVIEWING from "src/images/icons/Interviewing.svg";
import STORYTELLING from "src/images/icons/StoryTelling.svg";
import USERRESEARCH from "src/images/icons/UserResearch.svg";
import ImageLink from "components/image-link/image-link";
import Box from "components/box/box";

const Skills: React.FC = () => {
    const skills = [
        {
            src: PRESENTING,
            to: "",
            label: "Presenting",
        },
        {
            src: PROTOTYPING,
            to: "",
            label: "Prototyping",
        },
        {
            src: DT,
            to: "",
            label: "Design Thinking",
        },
        {
            src: INTERVIEWING,
            to: "",
            label: "Interviewing",
        },
        {
            src: STORYTELLING,
            to: "",
            label: "Story Telling",
        },
        {
            src: USERRESEARCH,
            to: "",
            label: "User Research",
        },
    ];

    return (
        <Box className="skills">
            <div className="skills-grid">
                {skills.map((skill) => (
                    <ImageLink
                        className="skills-image-link"
                        key={skill.src}
                        src={skill.src}
                        to={skill.to}
                        label={skill.label}
                    />
                ))}
            </div>
        </Box>
    );
};

export default Skills;
