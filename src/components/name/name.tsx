import React from "react";
import styles from "./name.module.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const Name: React.FC = () => {
    return (
        <Box className={styles.name}>
            <BoxContent>
                <div className={styles.container}>
                    <h1 className={styles.text}>Patrick Radulian</h1>
                </div>
            </BoxContent>
        </Box>
    );
};

export default Name;
