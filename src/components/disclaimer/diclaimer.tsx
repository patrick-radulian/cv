import React from "react";
import styles from "./disclaimer.module.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

type DisclaimerProps = {
    children: React.ReactNode;
};

const Disclaimer: React.FC<React.PropsWithChildren<DisclaimerProps>> = (props: DisclaimerProps) => {
    return (
        <Box className={styles.disclaimer}>
            <BoxContent padding="0.75rem 1.25rem">{props.children}</BoxContent>
        </Box>
    );
};

export default Disclaimer;
