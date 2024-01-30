import React from "react";
import "./github-link.css";
import Box from "components/box/box";
import GitHub_BW from "src/images/icons/GitHub_BW.svg";
import GitHub_Color from "src/images/icons/GitHub_Color.svg";
import IconBox from "components/icon-box/icon-box";

const GitHubLink: React.FC = () => {
    return (
        <Box order={10}>
            <IconBox
                src_front={GitHub_BW}
                src_back={GitHub_Color}
                to="https://github.com/patrick-radulian"
                alt="GitHub"
                label="Git&shy;Hub"
                isLink
            />
        </Box>
    );
};

export default GitHubLink;
