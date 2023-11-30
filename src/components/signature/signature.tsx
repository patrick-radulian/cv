import React from "react";
import styles from "./signature.module.css";
import Firstname from "src/images/signature/Patrick.png";
import Lastname from "src/images/signature/Radulian.png";

const Signature: React.FC = () => {
    return (
        <a href="/">
            <div className={styles.signature}>
                <div className={styles["first-name"]}>
                    <img src={Firstname} style={{ objectFit: "contain" }} alt="Patrick" />
                </div>
                <div className={styles["last-name"]}>
                    <img src={Lastname} style={{ objectFit: "contain" }} alt="Radulian" />
                </div>
            </div>
        </a>
    );
};

export default Signature;
