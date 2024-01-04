import React from "react";
import "./github.css";
import BoxContent from "components/box-content/box-content";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import GitHubIcon from "src/images/icons/GitHub.svg";

const GitHub: React.FC = () => {
    return (
        <Box className="github">
            <BoxContent>
                <div className="github-image">
                    <ImageLink
                        src={GitHubIcon}
                        to="https://github.com/patrick-radulian"
                        target="_blank"
                        label="GitHub"
                    />
                </div>
            </BoxContent>
        </Box>
    );
};

export default GitHub;
