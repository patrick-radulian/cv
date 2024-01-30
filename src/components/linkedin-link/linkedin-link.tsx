import React from "react";
import "./linkedin-link.css";
import Box from "components/box/box";
import LinkedIn_BW from "src/images/icons/LinkedIn_BW.svg";
import LinkedIn_Color from "src/images/icons/LinkedIn_Color.svg";
import IconBox from "components/icon-box/icon-box";

const LinkedInLink: React.FC = () => {
    return (
        <Box order={10}>
            <IconBox
                src_front={LinkedIn_BW}
                src_back={LinkedIn_Color}
                alt="LinkedIn"
                label="Lin&shy;ked&shy;In"
                to="https://www.linkedin.com/in/patrickradulian/"
                isLink
            />
        </Box>
    );
};

export default LinkedInLink;
