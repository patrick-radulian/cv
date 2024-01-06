import React from "react";

import "./resume.css";

import FrontEndExperience from "components/front-end-experience/front-end-experience";
import UXExperience from "components/ux-experience/ux-experience";
import Name from "components/name/name";
import Experience from "components/experience/experience";
import About from "components/about/about";
import Skills from "components/skills/skills";
import Tools from "components/tools/tools";
import Web from "components/web/web";
import Portrait from "components/portrait/portrait";
import Codepen from "components/codepen/codepen";
import GitHub from "components/github/github";
import Portfolio from "components/portfolio-link/portfolio-link";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";

import Chrome from "src/images/icons/Chrome.svg";
import Firefox from "src/images/icons/Firefox.svg";
import Edge from "src/images/icons/Edge.svg";

const Resume: React.FC = () => {
    const browsers = [
        {
            label: "Chrome",
            src: Chrome,
            to: "https://www.google.com/chrome/",
        },
        {
            label: "Firefox",
            src: Firefox,
            to: "https://www.mozilla.org/en-US/firefox/new/",
        },
        {
            label: "Edge",
            src: Edge,
            to: "https://www.microsoft.com/en-us/edge",
        },
    ];

    return (
        <React.Fragment>
            <About />
            <Portrait />
            <FrontEndExperience />
            <Name />
            <GitHub />
            <Codepen />
            <Portfolio />
            <Experience />
            <Skills />
            <UXExperience />
            <Web />
            <Tools />

            <Box className="disclaimer-home">
                <div className="disclaimer-text">
                    <p>Best viewed on</p>

                    <div className="browsers-list">
                        {browsers.map((browser) => (
                            <ImageLink
                                key={browser.label}
                                src={browser.src}
                                to={browser.to}
                                target="_blank"
                                alt={browser.label}
                            />
                        ))}
                    </div>

                    <p>(Mobile version: work in progress)</p>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default Resume;
