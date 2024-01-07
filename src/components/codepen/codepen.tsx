import React from "react";
import "./codepen.css";

import Box from "components/box/box";

const CodePen: React.FC = () => {
    const pens = [
        {
            href: "https://codepen.io/Tricon/pen/ExWYggK",
            src: "https://shots.codepen.io/username/pen/ExWYggK-1280.webp?version=1700040517",
            label: "SVG CSS animation",
        },
        {
            href: "https://codepen.io/Tricon/pen/BaMwOze",
            src: "https://shots.codepen.io/username/pen/BaMwOze-1280.webp?version=1704636031",
            label: "Cube Scroll Animation",
        },
        {
            href: "https://codepen.io/Tricon/pen/KzLyNz",
            src: "https://shots.codepen.io/username/pen/KzLyNz-1280.webp?version=1704636031",
            label: "User Menu",
        },
        {
            href: "https://codepen.io/Tricon/pen/zqeqmj",
            src: "https://shots.codepen.io/username/pen/zqeqmj-1280.webp?version=1704636031",
            label: "Context Menu - Radial Expansion",
        },
        {
            href: "https://codepen.io/Tricon/pen/OQMyBp",
            src: "https://shots.codepen.io/username/pen/OQMyBp-1280.webp?version=1704636031",
            label: "Loading Animation",
        },
        {
            href: "https://codepen.io/Tricon/pen/JKMoRm",
            src: "https://shots.codepen.io/username/pen/JKMoRm-1280.webp?version=1704636031",
            label: "Virtual Scrolling",
        },
        {
            href: "https://codepen.io/Tricon/pen/aNVYNo",
            src: "https://shots.codepen.io/username/pen/aNVYNo-1280.webp?version=1704636031",
            label: "Custom Checkbox Styling",
        },
    ];

    return (
        <React.Fragment>
            <Box className="codepen">
                <h1 className="codepen-title">Code Prototypes & Experiments</h1>

                <div className="codepen-pens">
                    {pens.map((pen) => (
                        <a key={pen.href} className="codepen-pen-link" href={pen.href} target="_blank">
                            <picture>
                                <source type="image/webp" srcSet={pen.src} />
                                <img src={pen.src} className="codepen-pen-preview" alt={pen.label} loading="lazy" />
                            </picture>
                            <span className="codepen-pen-label">{pen.label}</span>
                        </a>
                    ))}
                </div>
            </Box>
        </React.Fragment>
    );
};

export default CodePen;
