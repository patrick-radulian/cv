import React from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import ResumeSection from "components/resume-section/resume-section";
import PencilIcon from "src/images/sections/Pencil-Icon.svg";
import styles from "./portfolio.module.css";

import Sketch1 from "src/images/portfolio/sketches/Administrator UI.jpg";
import Sketch2 from "src/images/portfolio/sketches/Colored Compact Widget Study.jpg";
import Sketch3 from "src/images/portfolio/sketches/Colored List Widget Study.jpg";
import Sketch4 from "src/images/portfolio/sketches/Colored Project Page Study.jpg";
import Sketch5 from "src/images/portfolio/sketches/Colored Widget List Study.jpg";
import Sketch6 from "src/images/portfolio/sketches/Colored Widget Study.jpg";
import Sketch7 from "src/images/portfolio/sketches/Project Home Screen.jpg";
import Sketch8 from "src/images/portfolio/sketches/Project Home Screen and Project Overview.jpg";
import Sketch9 from "src/images/portfolio/sketches/Project Home Customization.jpg";
import Sketch10 from "src/images/portfolio/sketches/Searchbox Study.jpg";
import Sketch11 from "src/images/portfolio/sketches/Sidebar Study.jpg";
import Sketch12 from "src/images/portfolio/sketches/Sidebar Menu.jpg";
import Sketch13 from "src/images/portfolio/sketches/Sidebar Menu Collapse Study.jpg";
import Sketch14 from "src/images/portfolio/sketches/(Bonus) Workshop Plan - Part 1.jpg";
import Sketch15 from "src/images/portfolio/sketches/(Bonus) Workshop Plan - Part 2.jpg";

const Portfolio: React.FC = () => {
    const [index, setIndex] = React.useState(-1);

    const photos = [
        { src: Sketch7, width: 1349, height: 1440, title: "Project Home Screen" },
        { src: Sketch8, width: 1290, height: 1440, title: "Project Home Screen and Project Overview" },
        { src: Sketch9, width: 1387, height: 1440, title: "Project Home Customization" },
        { src: Sketch10, width: 1182, height: 1440, title: "Searchbox Study" },
        { src: Sketch11, width: 1060, height: 1440, title: "Sidebar Study" },
        { src: Sketch12, width: 2438, height: 790, title: "Sidebar Menu" },
        { src: Sketch13, width: 1031, height: 1440, title: "Sidebar Menu Collapse Study" },
        { src: Sketch1, width: 1818, height: 1440, title: "Administrator UI" },
        { src: Sketch2, width: 1248, height: 1440, title: "Colored Compact Widget Study" },
        { src: Sketch3, width: 3038, height: 1309, title: "Colored List Widget Study" },
        { src: Sketch4, width: 1164, height: 1440, title: "Colored Project Page Study" },
        { src: Sketch5, width: 1132, height: 1440, title: "Colored Widget List Study" },
        { src: Sketch6, width: 1184, height: 1440, title: "Colored Widget Study" },
        { src: Sketch14, width: 1091, height: 1440, title: "(Bonus) Workshop Plan - Part 1" },
        { src: Sketch15, width: 1150, height: 1440, title: "(Bonus) Workshop Plan - Part 2" },
    ];

    return (
        <React.Fragment>
            <ResumeSection icon={PencilIcon} backIcon={true} label="UI Sketches" className={styles.sketches}>
                <div style={{ paddingBlock: "1rem" }}>
                    <PhotoAlbum
                        layout="rows"
                        photos={photos}
                        targetRowHeight={150}
                        onClick={({ index: current }) => setIndex(current)}
                        spacing={20}
                        renderPhoto={({ imageProps: { src, alt, style, ...restImageProps } }) => (
                            <img
                                src={src}
                                alt={alt}
                                style={{ ...style, border: "1px solid var(--shadow)" }}
                                {...restImageProps}
                            />
                        )}
                    ></PhotoAlbum>
                </div>
            </ResumeSection>

            <Lightbox
                plugins={[Captions]}
                index={index}
                slides={photos}
                open={index >= 0}
                close={() => setIndex(-1)}
                carousel={{ finite: true }}
            />
        </React.Fragment>
    );
};

export default Portfolio;
