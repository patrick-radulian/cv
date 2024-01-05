import React from "react";
import "./name.css";
import Box from "components/box/box";

const Name: React.FC = () => {
    return (
        <Box className="name">
            <div className="name-text-container">
                <h1 className="name-text">
                    Patrick
                    <br />
                    Radulian
                </h1>
            </div>
        </Box>
    );
};

export default Name;
