import React from "react";
import "./portfolio-link.css";
import Box from "components/box/box";
import Portfolio_BW from "src/images/icons/Portfolio_BW.svg";
import Portfolio_Color from "src/images/icons/Portfolio_Color.svg";
import IconBox from "components/icon-box/icon-box";

const PortfolioLink: React.FC = () => {
    return (
        <Box order={10}>
            <IconBox
                src_front={Portfolio_BW}
                src_back={Portfolio_Color}
                alt="Portfolio"
                label="Port&shy;folio"
                to="/portfolio"
                isLink
            />
        </Box>
    );
};

export default PortfolioLink;
