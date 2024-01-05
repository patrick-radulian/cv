import React from "react";
import "./web.css";
import HTML from "src/images/icons/HTML.svg";
import CSS from "src/images/icons/CSS.svg";
import REACT from "src/images/icons/React.svg";
import TS from "src/images/icons/TS.svg";
import ImageLink from "components/image-link/image-link";
import Box from "components/box/box";

const Web: React.FC = () => {
    const imageLinks = [
        {
            src: HTML,
            to: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            target: "_blank",
            label: "HTML",
        },
        {
            src: CSS,
            to: "https://developer.mozilla.org/en-US/docs/Web/CSS",
            target: "_blank",
            label: "CSS",
        },
        {
            src: REACT,
            to: "https://react.dev/",
            target: "_blank",
            label: "React",
        },
        {
            src: TS,
            to: "https://www.typescriptlang.org/",
            target: "_blank",
            label: "TypeScript",
        },
    ];

    return (
        <Box className="web">
            <div className="web-grid">
                {imageLinks.map((imageLink) => (
                    <ImageLink
                        className="web-image-link"
                        key={imageLink.src}
                        src={imageLink.src}
                        to={imageLink.to}
                        target={imageLink.target}
                        label={imageLink.label}
                    />
                ))}
            </div>
        </Box>
    );
};

export default Web;
