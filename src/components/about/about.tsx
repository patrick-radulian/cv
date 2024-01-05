import React from "react";
import "./about.css";
import Box from "components/box/box";

const About: React.FC = () => {
    return (
        <Box className="about">
            <div className="subgrid">
                <h1 className="about-title">About</h1>

                <div className="about-text-container">
                    <p className="about-text">
                        I am a UI/UX designer with an <em>extraordinary technical foundation</em>, counting over 12
                        years of front-end engineering experience, doing both <em>technical and design work</em> - 8 of
                        them working on <em>enterprise level applications</em> with 3 years spent exlusively on UI/UX
                        design.
                    </p>
                    <p className="about-text">
                        My defining traits are <em>strong visual intelligence</em>, highly developed empathy, a very
                        analytical approach, <em>excellent communication skills</em>, and a special ability to combine
                        design and technology perspectives.
                    </p>
                </div>
            </div>
        </Box>
    );
};

export default About;
