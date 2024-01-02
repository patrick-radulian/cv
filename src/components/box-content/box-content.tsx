import React, { PropsWithChildren } from "react";
import CSS from "csstype";
import styles from "./box-content.module.css";

type BoxContentProps = {
    children?: React.ReactNode;
    padding?: CSS.Properties["padding"];
};

const BoxContent: React.FC<PropsWithChildren<BoxContentProps>> = (props: BoxContentProps) => {
    return (
        <div className={styles["box-content"]} style={props.padding ? { padding: props.padding } : {}}>
            {props.children}
        </div>
    );
};

export default BoxContent;
