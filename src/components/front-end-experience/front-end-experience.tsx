import React from "react";
import styles from "./front-end-experience.module.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const FrontEndExperience: React.FC = () => {
    return (
        <Box className={styles["fe-xp"]}>
            <BoxContent>
                <div className={styles.experience}>
                    <h1 className={styles.number}>12</h1>
                    <span className={styles.years}>yr</span>
                </div>

                <p className={styles.engineering}>
                    Front-end
                    <br />
                    Engineering
                </p>
            </BoxContent>
        </Box>
    );
};

export default FrontEndExperience;
