import React from "react";
import styles from "./ux-experience.module.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const UXExperience: React.FC = () => {
    return (
        <Box className={styles["ux-xp"]}>
            <BoxContent>
                <div className={styles.experience}>
                    <h1 className={styles.number}>3</h1>
                    <span className={styles.years}>yr</span>
                </div>

                <p className={styles.engineering}>
                    UX
                    <br />
                    Design
                </p>
            </BoxContent>
        </Box>
    );
};

export default UXExperience;
