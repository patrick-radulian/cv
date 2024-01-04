import React from "react";
import { Outlet } from "react-router-dom";
import "./grid.css";

const Grid: React.FC = () => {
    return (
        <div className="grid">
            <Outlet />
        </div>
    );
};

export default Grid;
