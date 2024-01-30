import React from "react";
import "./codepen-link.css";
import Box from "components/box/box";
import Codepen_BW from "src/images/icons/Codepen_BW.svg";
import Codepen_Color from "src/images/icons/Codepen_Color.svg";
import IconBox from "components/icon-box/icon-box";

const CodepenLink: React.FC = () => {
    return (
        <Box order={10}>
            <IconBox
                src_front={Codepen_BW}
                src_back={Codepen_Color}
                alt="Codepen"
                label="Code&shy;pen"
                to="https://codepen.io/Tricon/"
                isLink
            />
        </Box>
    );
};

export default CodepenLink;
