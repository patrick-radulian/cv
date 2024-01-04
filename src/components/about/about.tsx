import React from "react";
import "./about.css";
import Box from "components/box/box";
import BoxBackground from "components/box-background/box-background";
import BoxContent from "components/box-content/box-content";

const About: React.FC = () => {
    return (
        <Box className="about" noBg>
            <div className="about-background">
                <BoxBackground />
                <BoxContent>
                    <h1 className="title">About</h1>
                    <p className="content">
                        I am a UI/UX designer with an <em>extraordinary technical foundation</em>, counting over 12
                        years of front-end engineering experience, doing both <em>technical and design work</em> - 8 of
                        them working on <em>enterprise level applications</em> with 3 years spent exlusively on UI/UX
                        design.
                    </p>
                    <p className="content">
                        My defining traits are <em>strong visual intelligence</em>, highly developed empathy, a very
                        analytical approach, <em>excellent communication skills</em>, and a special ability to combine
                        design and technology perspectives.
                    </p>
                </BoxContent>
            </div>
        </Box>
    );
};

export default About;
