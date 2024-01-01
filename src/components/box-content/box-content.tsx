import React, { PropsWithChildren } from "react";
import styles from "./box-content.module.css";

type BoxContentProps = {
    children?: React.ReactNode;
};

const BoxContent: React.FC<PropsWithChildren> = (props: BoxContentProps) => {
    return <div className={styles["box-content"]}>{props.children}</div>;
};

export default BoxContent;
