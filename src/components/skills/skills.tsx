import React from "react";
import "./skills.css";
import PRESENTING from "src/images/icons/Presenting.svg";
import PROTOTYPING from "src/images/icons/Prototyping.svg";
import DT from "src/images/icons/DesignThinking.svg";
import INTERVIEWING from "src/images/icons/Interviewing.svg";
import STORYTELLING from "src/images/icons/StoryTelling.svg";
import USERRESEARCH from "src/images/icons/UserResearch.svg";
import Box from "components/box/box";
import IconBox from "components/icon-box/icon-box";

const Skills: React.FC = () => {
    return (
        <Box className="skills" order={10}>
            <div className="skills-grid">
                <IconBox src_front={PRESENTING} label="Pre&shy;sen&shy;ting" />
                <IconBox src_front={PROTOTYPING} label="Pro&shy;to&shy;ty&shy;ping" />
                <IconBox src_front={DT} label="De&shysign Thin&shy;king" />
                <IconBox src_front={INTERVIEWING} label="In&shy;ter&shy;view&shy;ing" />
                <IconBox src_front={STORYTELLING} label="Sto&shy;ry Tel&shy;ling" />
                <IconBox src_front={USERRESEARCH} label="User Re&shy;search" />
            </div>
        </Box>
    );
};

export default Skills;
