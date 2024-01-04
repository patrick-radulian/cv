import React from "react";
import "./portrait-link.css";
import Box from "components/box/box";
import BoxBackground from "components/box-background/box-background";
import BoxContent from "components/box-content/box-content";
import Photo from "src/images/Portrait.png";

const PortraitLink: React.FC = () => {
    return (
        <Box className="portrait-link" noBg>
            <div className="portrait-link-background">
                <BoxBackground />
                <BoxContent />
            </div>

            <div className="portrait-link-image">
                <img src={Photo} alt="Portrait" />
            </div>
        </Box>
    );
};

export default PortraitLink;
