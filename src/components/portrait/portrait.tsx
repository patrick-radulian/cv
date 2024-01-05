import React from "react";
import "./portrait.css";
import Box from "components/box/box";
import Photo from "src/images/Portrait.png";

const PortraitLink: React.FC = () => {
    return (
        <Box className="portrait">
            <div className="portrait-image">
                <img src={Photo} alt="Portrait" />
            </div>
        </Box>
    );
};

export default PortraitLink;
