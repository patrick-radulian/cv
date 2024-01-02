import React, { PropsWithChildren } from "react";
import styles from "./box-content.module.css";

type BoxContentProps = {
    children?: React.ReactNode;
    padding?: React.CSSProperties["padding"];
};

const BoxContent: React.FC<PropsWithChildren> = (props: BoxContentProps) => {
    return (
        <div className={styles["box-content"]} style={props.padding ? { padding: props.padding } : {}}>
            {props.children}
        </div>
    );
};

export default BoxContent;
