import React from "react";
import styles from "./triangles.module.css";
import TrianglesIcon from "src/images/Triangles.svg";

const Triangles: React.FC = () => {
    return <img src={TrianglesIcon} className={styles.triangles} alt="" loading="lazy"/>;
};

export default Triangles;
