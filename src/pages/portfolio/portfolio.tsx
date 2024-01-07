import React from "react";
import "./portfolio.css";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";

import Box from "components/box/box";
import Sketches from "components/sketches/sketches";
import CodePen from "components/codepen/codepen";

const Portfolio: React.FC = () => {
    return (
        <React.Fragment>
            <Box className="portfolio-title-box">
                <h1>Portfolio</h1>
                <h4>Work in Progress</h4>
            </Box>

            <Sketches />

            <CodePen />
        </React.Fragment>
    );
};

export default Portfolio;
