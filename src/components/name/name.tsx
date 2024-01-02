import React from "react";
import styles from "./name.module.css";

const Name: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.name}>Patrick Radulian</h1>
        </div>
    );
};

export default Name;
