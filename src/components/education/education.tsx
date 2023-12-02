import React from "react";
import ResumeSection from "../resume-section/resume-section";
import EducationIcon from "src/images/sections/Education-Icon.svg";
import styles from "./education.module.css";
import Triangles from "../triangles/triangles";

const Education: React.FC = () => {
    return (
        <ResumeSection icon={EducationIcon} label="Education">
            <div className="justify">
                <h4>
                    <Triangles />
                    Active
                </h4>

                <p className="justify">
                    Continuous self-taught learning with the help of platforms like Udacity, Udemy, Interaction Design
                    Foundation, and more.
                </p>
            </div>

            <div className="justify">
                <h4>
                    <Triangles />
                    2022
                </h4>

                <p className="justify">Design Thinking Certificate</p>

                <ul>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Empathy in the design process</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Identify core problems</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Solution concept</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Creating & testing prototypes</span>
                    </li>
                </ul>

                <p className={styles.institute}>
                    <em>&mdash; Interaction Design Foundation</em>
                </p>
            </div>

            <div className="justify">
                <h4>
                    <Triangles />
                    2020
                </h4>

                <p className="justify">
                    Design Sprint Masterclass for the moderation of a workshop with the key points:
                </p>

                <ul>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">User Interviews</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Problem identification</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Conceptualization of solutions</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Collaborative decision-making</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Prototyping & user testing</span>
                    </li>
                    <li>
                        <span className="bullet">•</span>
                        <span className="bullet-value">Result analysis</span>
                    </li>
                </ul>

                <p className={styles.institute}>
                    <em>&mdash; AJ&Smart</em>
                </p>
            </div>

            <div className="justify">
                <h4>
                    <Triangles />
                    2010
                </h4>

                <p className="justify">Teacher training program for English and Information Technology (canceled).</p>

                <p className={styles.institute}>
                    <em>&mdash; University of Vienna</em>
                </p>
            </div>
        </ResumeSection>
    );
};

export default Education;
