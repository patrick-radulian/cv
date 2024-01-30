import React from "react";
import "./ux-experience.css";
import Box from "components/box/box";
import UXXP from "src/images/3yr.svg";
import IconBox from "components/icon-box/icon-box";

const UXExperience: React.FC = () => {
    return (
        <Box order={5}>
            <IconBox src_front={UXXP} alt="3 years" label="UI/UX Design" />
        </Box>
    );
};

export default UXExperience;
