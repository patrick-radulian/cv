import React from "react";
import "./name.css";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const Name: React.FC = () => {
    return (
        <Box className="name">
            <BoxContent>
                <div className="text-container">
                    <h1 className="text">Patrick Radulian</h1>
                </div>
            </BoxContent>
        </Box>
    );
};

export default Name;
