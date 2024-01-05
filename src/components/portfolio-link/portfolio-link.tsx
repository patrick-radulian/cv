import React from "react";
import "./portfolio-link.css";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import PortfolioIcon from "src/images/icons/Portfolio.svg";

const PortfolioLink: React.FC = () => {
    return (
        <Box className="portfolio-link">
            <div className="portfolio-link-image">
                <ImageLink src={PortfolioIcon} to="/portfolio" label="Portfolio" />
            </div>
        </Box>
    );
};

export default PortfolioLink;
