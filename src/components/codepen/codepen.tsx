import React from "react";
import "./codepen.css";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import CodePenIcon from "src/images/icons/Codepen.svg";

const Codepen: React.FC = () => {
    return (
        <Box className="codepen">
            <div className="codepen-image">
                <ImageLink
                    src={CodePenIcon}
                    to="https://codepen.io/Tricon/pens/public"
                    target="_blank"
                    label="Codepen"
                />
            </div>
        </Box>
    );
};

export default Codepen;
