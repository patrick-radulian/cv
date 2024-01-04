import React from "react";
import styles from "./portrait.module.css";
import Box from "components/box/box";
import BoxBackground from "components/box-background/box-background";
import BoxContent from "components/box-content/box-content";
import Photo from "src/images/Portrait.png";

const Portrait: React.FC = () => {
    return (
        <Box className={styles.portrait} noBg>
            <div className={styles["portrait-background"]}>
                <BoxBackground />
                <BoxContent />
            </div>

            <div className={styles["portrait-image"]}>
                <img src={Photo} alt="Portrait" />
            </div>
        </Box>
    );
};

export default Portrait;
