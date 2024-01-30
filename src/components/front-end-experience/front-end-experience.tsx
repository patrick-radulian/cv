import React from "react";
import "./front-end-experience.css";
import Box from "components/box/box";
import FrontEndXP from "src/images/12yr.svg";
import IconBox from "components/icon-box/icon-box";

const FrontEndExperience: React.FC = () => {
    return (
        <Box order={0}>
            <IconBox src_front={FrontEndXP} alt="12 years" label="Front&shy;end" />
        </Box>
    );
};

export default FrontEndExperience;
