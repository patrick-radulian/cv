import React from "react";
import styles from "./header.module.css";
import Portrait from "src/images/Portrait.svg";

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <img src={Portrait} className={styles.portrait} width="250" height="247" alt="Portrait" />

            <div className={styles.tags}>
                <p className={styles.tag}>UI/UX Designer</p>
                <p className={styles.tag}>UI engineer</p>
                <p className={styles.tag}>Dreamer</p>
            </div>
        </header>
    );
};

export default Header;
