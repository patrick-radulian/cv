import React from "react";
import "./xing-link.css";
import Box from "components/box/box";
import XingIcon from "src/images/icons/Xing.svg";
import IconBox from "components/icon-box/icon-box";

const XingLink: React.FC = () => {
    return (
        <Box order={10}>
            <IconBox
                src_front={XingIcon}
                to="https://www.xing.com/profile/Patrick_Radulian/"
                alt="Xing"
                label="Xing"
                isLink
            />
        </Box>
    );
};

export default XingLink;
