import styles from "./root.module.css";
import React, { PropsWithChildren } from "react";

const Root: React.FC<PropsWithChildren> = ({ children }) => {
    return <main className={styles.main}>{children}</main>;
};

export default Root;
