import React from "react";
import "./ux-experience.css";
import Box from "components/box/box";

const UXExperience: React.FC = () => {
    return (
        <Box className="ux">
            <div className="ux-grid">
                <div className="ux-experience">
                    <h1 className="ux-number">3</h1>
                    <span className="ux-years">yr</span>
                </div>

                <p className="ux-text">
                    UX
                    <br />
                    Design
                </p>
            </div>
        </Box>
    );
};

export default UXExperience;
