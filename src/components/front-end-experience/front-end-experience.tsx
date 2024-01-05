import React from "react";
import "./front-end-experience.css";
import Box from "components/box/box";

const FrontEndExperience: React.FC = () => {
    return (
        <Box className="front-end">
            <div className="front-end-experience">
                <h1 className="front-end-number">12</h1>
                <span className="front-end-years">yr</span>
            </div>

            <p className="front-end-text">
                Front-end
                <br />
                Engineering
            </p>
        </Box>
    );
};

export default FrontEndExperience;
