import React from "react";
import "./web.css";
import HTML from "src/images/icons/HTML.svg";
import CSS from "src/images/icons/CSS.svg";
import REACT from "src/images/icons/React.svg";
import TS from "src/images/icons/TS.svg";
import ImageLink from "components/image-link/image-link";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const Web: React.FC = () => {
    return (
        <Box className="web">
            <BoxContent>
                <div className="web-skills">
                    <ImageLink
                        src={HTML}
                        to="https://developer.mozilla.org/en-US/docs/Web/HTML"
                        target="_blank"
                        label="HTML"
                    />
                    <ImageLink
                        src={CSS}
                        to="https://developer.mozilla.org/en-US/docs/Web/CSS"
                        target="_blank"
                        label="CSS"
                    />
                    <ImageLink src={REACT} to="https://react.dev/" target="_blank" label="React" />
                    <ImageLink src={TS} to="https://www.typescriptlang.org/" target="_blank" label="TypeScript" />
                </div>
            </BoxContent>
        </Box>
    );
};

export default Web;
