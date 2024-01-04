import React from "react";
import "./portrait.css";
import Box from "components/box/box";
import BoxBackground from "components/box-background/box-background";
import BoxContent from "components/box-content/box-content";
import Photo from "src/images/Portrait.png";

const PortraitLink: React.FC = () => {
    return (
        <Box className="portrait" noBg>
            <div className="portrait-background">
                <BoxBackground />
                <BoxContent />
            </div>

            <div className="portrait-image">
                <img src={Photo} alt="Portrait" />
            </div>
        </Box>
    );
};

export default PortraitLink;
