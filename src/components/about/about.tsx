import React from "react";
import ResumeSection from "../resume-section/resume-section";
import AboutIcon from "src/images/sections/About-Icon.svg";
import Triangles from "../triangles/triangles";

const About: React.FC = () => {
    return (
        <ResumeSection icon={AboutIcon} label="About">
            <h4 className="justify">
                <Triangles />
                Creative UI/UX Designer with a solid technical foundation.
            </h4>

            <div className="justify p">
                <ul>
                    <li>Self-taught and inquisitive UI/UX designer and UI engineer</li>
                    <li>12 years of experience in the field of front-end engineering</li>
                    <li>8 years of experience building for enterprise applications</li>
                    <li>3 years of experience in the field of UI/UX design</li>
                    <li>Strong visual intelligence, empathy, analytical approach and communication skills</li>
                    <li>Special ability to combine design and technology perspectives</li>
                    <li>Passion for outstanding user experience</li>
                </ul>
            </div>
        </ResumeSection>
    );
};

export default About;
