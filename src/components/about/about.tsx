import React from "react";
import ResumeSection from "../resume-section/resume-section";
import AboutIcon from "src/images/sections/About-Icon.svg";
import Triangles from "../triangles/triangles";

const About: React.FC = () => {
    return (
        <ResumeSection icon={AboutIcon} label="About">
            <h4 className="justify">
                <Triangles />
                Creative UI/UX Designer with an extraordinary technical foundation.
            </h4>

            <div className="justify p">
                <ul>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Self-taught and inquisitive UI/UX designer and UI engineer</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">
                            12 years of experience in the field of front-end engineering
                        </span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">8 years of experience building for enterprise applications</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">3 years of experience in the field of UI/UX design</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">
                            Strong visual intelligence, empathy, analytical approach and communication skills
                        </span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">
                            Special ability to combine design and technology perspectives
                        </span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Passion for outstanding user experience</span>
                    </li>
                </ul>
            </div>
        </ResumeSection>
    );
};

export default About;
