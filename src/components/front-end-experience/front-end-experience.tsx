import React from "react";
import styles from "./front-end-experience.module.css";

const FrontEndExperience: React.FC = () => {
    return (
        <React.Fragment>
            <div className={styles.experience}>
                <h1 className={styles.number}>12</h1>
                <span className={styles.years}>yr</span>
            </div>

            <p className={styles.engineering}>Front-end<br/>Engineering</p>
        </React.Fragment>
    );
};

export default FrontEndExperience;
