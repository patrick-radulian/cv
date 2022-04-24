import React from "react"
import CVSection from "../cv-section/cv-section";
import EducationIcon from "../../public/images/Education-Icon.svg"
import styles from "./education.module.css"
import Triangles from "../triangles/triangles";

const Education: React.FC<{}> = () => {
    return (
        <div className={styles.education}>
            <CVSection icon={EducationIcon} label="Education">
                <div>
                    <h4>
                        <Triangles/> Active
                    </h4>

                    <p>
                        Continuous self-taught learning with the
                        help of platforms like Udacity, Udemy,
                        Interaction Design Foundation, and more.
                    </p>
                </div>

                <div>
                    <h4>
                        <Triangles/> 2010
                    </h4>

                    <p>
                        Teacher training program for English and
                        Information Technology (canceled).
                    </p>

                    <p className={styles.institute}>
                        <em>&mdash; University of Vienna</em>
                    </p>
                </div>

                <div>
                    <h4>
                        <Triangles/> 2005
                    </h4>

                    <p>
                        First half of the Digital Animation
                        Program.
                    </p>

                    <p className={styles.institute}>
                        <em>&mdash; SAE Institute Vienna</em>
                    </p>
                </div>
            </CVSection>
        </div>
    )
}

export default Education;