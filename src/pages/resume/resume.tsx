import React from "react";
import Portrait from "src/images/Portrait.png";
import styles from "./resume.module.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";
import BoxBackground from "components/box-background/box-background";
import FrontEndExperience from "components/front-end-experience/front-end-experience";
import UXExperience from "components/ux-experience/ux-experience";

const Resume: React.FC = () => {
    return (
        <div className={styles.grid}>
            <Box className={styles.about}>
                <BoxContent>About</BoxContent>
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
                <BoxContent>Patrick-Alexander Radulian</BoxContent>
            </Box>
            <Box className={styles.github}>
                <BoxContent>GitHub</BoxContent>
            </Box>
            <Box className={styles.codepen}>
                <BoxContent>Codepen</BoxContent>
            </Box>
            <Box className={styles.portfolio}>
                <BoxContent>Portfolio</BoxContent>
            </Box>
            <Box className={styles.experience}>
                <BoxContent>Experience</BoxContent>
            </Box>
            <Box className={styles.skills}>
                <BoxContent>Skills</BoxContent>
            </Box>
            <Box className={styles["ux-xp"]}>
                <BoxContent>
                    <UXExperience />
                </BoxContent>
            </Box>
        </div>
    );
};

export default Resume;
