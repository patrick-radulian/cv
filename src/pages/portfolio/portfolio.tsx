import React from "react";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import styles from "./portfolio.module.css";

import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";
import Sketches from "components/sketches/sketches";

const NewPortfolio: React.FC = () => {
    return (
        <React.Fragment>
            <Box className={styles.disclaimer}>
                <BoxContent>
                    <h1>Portfolio</h1>
                    <h4>Work in Progress</h4>
                </BoxContent>
            </Box>

            <Box className={styles.portfolio}>
                <BoxContent>
                    <Sketches />
                </BoxContent>
            </Box>
        </React.Fragment>
    );
};

export default NewPortfolio;
