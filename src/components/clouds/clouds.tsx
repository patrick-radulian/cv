import React from "react";
import styles from "./clouds.module.css";
import Cloud1 from "src/images/background/Clouds1.png";
import Cloud2 from "src/images/background/Clouds2.png";

const Clouds: React.FC = () => {
    return (
        <div className={styles.clouds}>
            <div className={`${styles.cloud} ${styles.cloud1}`}>
                <img src={Cloud1} alt="" />
            </div>
            <div className={`${styles.cloud} ${styles.cloud2}`}>
                <img src={Cloud2} alt="" />
            </div>
        </div>
    );
};

export default Clouds;
