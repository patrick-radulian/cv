import React from "react";
import styles from "./resume.module.css";

import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";
import BoxBackground from "components/box-background/box-background";
import FrontEndExperience from "components/front-end-experience/front-end-experience";
import UXExperience from "components/ux-experience/ux-experience";
import Name from "components/name/name";
import ImageLink from "components/image-link/image-link";

import Portrait from "src/images/Portrait.png";
import Bulb from "src/images/Bulb.png";
import GitHubIcon from "src/images/icons/GitHub.svg";
import CodePenIcon from "src/images/icons/Codepen.svg";
import PortfolioIcon from "src/images/icons/Portfolio.svg";
import Experience from "components/experience/experience";
import About from "components/about/about";
import Skills from "components/skills/skills";
import Tools from "components/tools/tools";
import Web from "components/web/web";

const Resume: React.FC = () => {
    return (
        <div className={styles.grid}>
            <Box className={styles.about}>
                <BoxContent>
                    <About />
                </BoxContent>
            </Box>
            <Box className={styles.portrait} noBg>
                <div className={styles["portrait-background"]}>
                    <BoxBackground />
                    <BoxContent />
                </div>

                <div className={styles["portrait-image"]}>
                    <img src={Portrait} alt="Portrait" />
                </div>
            </Box>
            <Box className={styles["fe-xp"]}>
                <BoxContent>
                    <FrontEndExperience />
                </BoxContent>
            </Box>
            <Box className={styles.name}>
                <BoxContent>
                    <Name />
                </BoxContent>
            </Box>
            <Box className={styles.github}>
                <BoxContent>
                    <div className={styles["github-image"]}>
                        <ImageLink src={GitHubIcon} href="https://github.com/patrick-radulian" label="GitHub" />
                    </div>
                </BoxContent>
            </Box>
            <Box className={styles.codepen}>
                <BoxContent>
                    <div className={styles["codepen-image"]}>
                        <ImageLink src={CodePenIcon} href="https://codepen.io/Tricon/pens/public" label="Codepen" />
                    </div>
                </BoxContent>
            </Box>
            <Box className={styles.portfolio}>
                <BoxContent>
                    <div className={styles["portfolio-image"]}>
                        <ImageLink src={PortfolioIcon} href="/portfolio.html" label="Portfolio" />
                    </div>
                </BoxContent>
            </Box>
            <Box className={styles.experience} noBg>
                <div className={styles["experience-background"]}>
                    <BoxBackground />
                    <BoxContent>
                        <Experience />
                    </BoxContent>
                </div>

                <img src={Bulb} className={styles["experience-image"]} alt="Bag" />
            </Box>
            <Box className={styles.skills}>
                <BoxContent>
                    <Skills />
                </BoxContent>
            </Box>
            <Box className={styles["ux-xp"]}>
                <BoxContent>
                    <UXExperience />
                </BoxContent>
            </Box>
            <Box className={styles.web}>
                <BoxContent>
                    <Web />
                </BoxContent>
            </Box>
            <Box className={styles.tools}>
                <BoxContent>
                    <Tools />
                </BoxContent>
            </Box>
        </div>
    );
};

export default Resume;
