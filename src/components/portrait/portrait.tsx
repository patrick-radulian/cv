import React from "react";
import "./portrait.css";
import Photo from "src/images/Portrait 2.png";

const PortraitLink: React.FC = () => {
    return (
        <div className="box portrait">
            <div className="box-border-container">
                <div className="box-content-container"></div>
            </div>

            <div className="portrait-container">
                <img src={Photo} className="portrait-image" alt="Portrait" />
            </div>
        </div>
    );
};

export default PortraitLink;
