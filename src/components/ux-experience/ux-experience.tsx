import React from "react";
import styles from "./ux-experience.module.css";

const UXExperience: React.FC = () => {
    return (
        <React.Fragment>
            <div className={styles.experience}>
                <h1 className={styles.number}>3</h1>
                <span className={styles.years}>yr</span>
            </div>

            <p className={styles.engineering}>
                UX
                <br />
                Design
            </p>
        </React.Fragment>
    );
};

export default UXExperience;
