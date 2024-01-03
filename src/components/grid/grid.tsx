import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./grid.module.css";

const Grid: React.FC = () => {
    return (
        <div className={styles.grid}>
            <Outlet />
        </div>
    );
};

export default Grid;
