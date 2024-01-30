import React from "react";

import "./resume.css";

import FrontEndExperience from "components/front-end-experience/front-end-experience";
import UXExperience from "components/ux-experience/ux-experience";
import Experience from "components/experience/experience";
import About from "components/about/about";
import Skills from "components/skills/skills";
import Portrait from "components/portrait/portrait";
import GitHubLink from "components/github-link/github-link";
import Container from "components/container/container";
import PortfolioLink from "components/portfolio-link/portfolio-link";
import Intro from "components/intro/intro";

import Chrome from "src/images/icons/Chrome_BW.svg";
import Firefox from "src/images/icons/Firefox_BW.svg";
import Edge from "src/images/icons/Edge_BW.svg";
import CodepenLink from "components/codepen-link/codepen-link";
import LinkedInLink from "components/linkedin-link/linkedin-link";
import Tools from "components/tools/tools";
import Web from "components/web/web";
import Box from "components/box/box";

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
            <Container reverse>
                <Intro />
                <Portrait />
            </Container>

            <About />

            <div className="center-grid">
                <FrontEndExperience />
                <UXExperience />
                <CodepenLink />
                <PortfolioLink />
                <LinkedInLink />
                <GitHubLink />
            </div>

            <Skills />

            <Tools />

            <div className="filler" />

            <Web />

            <Experience />
        </React.Fragment>
    );
};

export default Resume;
