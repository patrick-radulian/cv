import React from "react";
import styles from "./portfolio.module.css";
import BoxContent from "components/box-content/box-content";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import PortfolioIcon from "src/images/icons/Portfolio.svg";

const Portfolio: React.FC = () => {
    return (
        <Box className={styles.portfolio}>
            <BoxContent>
                <div className={styles["portfolio-image"]}>
                    <ImageLink src={PortfolioIcon} to="/portfolio" label="Portfolio" />
                </div>
            </BoxContent>
        </Box>
    );
};

export default Portfolio;
