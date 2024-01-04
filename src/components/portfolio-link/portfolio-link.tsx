import React from "react";
import "./portfolio-link.css";
import BoxContent from "components/box-content/box-content";
import Box from "components/box/box";
import ImageLink from "components/image-link/image-link";
import PortfolioIcon from "src/images/icons/Portfolio.svg";

const PortfolioLink: React.FC = () => {
    return (
        <Box className="portfolio-link">
            <BoxContent>
                <div className="portfolio-link-image">
                    <ImageLink src={PortfolioIcon} to="/portfolio" label="Portfolio" />
                </div>
            </BoxContent>
        </Box>
    );
};

export default PortfolioLink;
