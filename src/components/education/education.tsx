import React from "react";
import ResumeSection from "../resume-section/resume-section";
import EducationIcon from "src/images/sections/Education-Icon.svg";
import styles from "./education.module.css";
import Triangles from "../triangles/triangles";

const Education: React.FC = () => {
    return (
        <>
            <ResumeSection className={styles.education} icon={EducationIcon} label="Education">
                <div className="justify">
                    <h4>
                        <Triangles /> Active
                    </h4>

                    <p className="justify">
                        Continuous self-taught learning with the help of platforms like Udacity, Udemy, Interaction
                        Design Foundation, and more.
                    </p>
                </div>

                <div className="justify">
                    <h4>
                        <Triangles /> 2022
                    </h4>

                    <p className="justify">Design Thinking Certificate</p>

                    <p className={styles.institute}>
                        <em>&mdash; Interaction Design Foundation</em>
                    </p>
                </div>

                <div className="justify">
                    <h4>
                        <Triangles /> 2020
                    </h4>

                    <p className="justify">Design Sprint Masterclass</p>

                    <p className={styles.institute}>
                        <em>&mdash; AJ&Smart</em>
                    </p>
                </div>

                <div className="justify">
                    <h4>
                        <Triangles /> 2010
                    </h4>

                    <p className="justify">
                        Teacher training program for English and Information Technology (canceled).
                    </p>

                    <p className={styles.institute}>
                        <em>&mdash; University of Vienna</em>
                    </p>
                </div>

                <div className="justify">
                    <h4>
                        <Triangles /> 2005
                    </h4>

                    <p className="justify">First half of the Digital Animation Program.</p>

                    <p className={styles.institute}>
                        <em>&mdash; SAE Institute Vienna</em>
                    </p>
                </div>
            </ResumeSection>
        </>
    );
};

export default Education;
