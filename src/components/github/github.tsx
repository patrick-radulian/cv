import React from "react";
import "./github.css";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import GitHubIcon from "src/images/icons/GitHub.svg";

const GitHub: React.FC = () => {
    return (
        <Box className="github">
            <div className="github-image">
                <ImageLink src={GitHubIcon} to="https://github.com/patrick-radulian" target="_blank" label="GitHub" />
            </div>
        </Box>
    );
};

export default GitHub;
