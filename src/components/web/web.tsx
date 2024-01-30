import React from "react";
import "./web.css";
import HTML_BW from "src/images/icons/HTML_BW.svg";
import HTML_Color from "src/images/icons/HTML_Color.svg";
import CSS_BW from "src/images/icons/CSS_BW.svg";
import CSS_Color from "src/images/icons/CSS_Color.svg";
import REACT_BW from "src/images/icons/React_BW.svg";
import REACT_Color from "src/images/icons/React_Color.svg";
import TS_BW from "src/images/icons/TS_BW.svg";
import TS_Color from "src/images/icons/TS_Color.svg";
import Box from "components/box/box";
import IconBox from "components/icon-box/icon-box";

const Web: React.FC = () => {
    const imageLinks = [
        {
            src: HTML_BW,
            src2: HTML_Color,
            to: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            target: "_blank",
            label: "HTML",
        },
        {
            src: CSS_BW,
            src2: CSS_Color,
            to: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            target: "_blank",
            label: "CSS",
        },
        {
            src: REACT_BW,
            src2: REACT_Color,
            to: "https://react.dev/",
            target: "_blank",
            label: "React",
        },
        {
            src: TS_BW,
            src2: TS_Color,
            to: "https://www.typescriptlang.org/",
            target: "_blank",
            label: "TypeScript",
        },
    ];

    return (
        <Box className="web" order={10} /* flex="1 1 calc((100% * 2 / 6) - 0.25rem)" */>
            <div className="web-grid">
                <IconBox
                    src_front={imageLinks[0].src}
                    src_back={imageLinks[0].src2}
                    to={imageLinks[0].to}
                    label={imageLinks[0].label}
                    isLink
                />
                <IconBox
                    src_front={imageLinks[1].src}
                    src_back={imageLinks[1].src2}
                    to={imageLinks[1].to}
                    label={imageLinks[1].label}
                    isLink
                />
                <IconBox
                    src_front={imageLinks[2].src}
                    src_back={imageLinks[2].src2}
                    to={imageLinks[2].to}
                    label={imageLinks[2].label}
                    isLink
                />
                <IconBox
                    className="typescript"
                    src_front={imageLinks[3].src}
                    src_back={imageLinks[3].src2}
                    to={imageLinks[3].to}
                    label={imageLinks[3].label}
                    isLink
                />
            </div>
        </Box>
    );
};

export default Web;
