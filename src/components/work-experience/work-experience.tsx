import React from "react";
import ResumeSection from "../resume-section/resume-section";
import WorkIcon from "src/images/sections/Work-Icon.svg";
import Triangles from "../triangles/triangles";
import styles from "./work-experience.module.css";

const WorkExperience: React.FC = () => {
    return (
        <ResumeSection icon={WorkIcon} label="Work Experience">
            <div className={styles.station}>
                <h4 className={styles.header}>
                    <div className={styles.company}>
                        <Triangles /> Dynatrace Austria GmbH
                    </div>
                    <p className={styles.time}>Since August 2022</p>
                </h4>

                <p className="justify">
                    Dynatrace gave me the opportunity to build upon my knowledge as a front-end engineer and expand it
                    with valuable new lessons in unit- and e2e testing, visual regression testing, build configuration,
                    git flow optimization, and cross-team and cross-project collaboration.
                </p>
            </div>

            <div className={styles.station}>
                <h4 className={styles.header}>
                    <div className={styles.company}>
                        <Triangles /> TheVentury GmbH
                    </div>
                    <p className={styles.time}>May 2022 &mdash; July 2022</p>
                </h4>

                <p className="justify">
                    As a senior front-end engineer, I support TheVentury in a large variety of internal and
                    customer-facing projects, while concentrating on refactoring and improving vanilla-js projects and
                    react applications.
                </p>
            </div>

            <div className={styles.station}>
                <h4 className={styles.header}>
                    <div className={styles.company}>
                        <Triangles /> Semantic Web Company GmbH
                    </div>
                    <p className={styles.time}>August 2015 &mdash; March 2022</p>
                </h4>

                <p className="justify">
                    Initially I joined Semantic Web Company as a front-end engineer, becoming a part of the product
                    development scrum-team which counted eight engineers. My responsibilities encompassed refactoring
                    legacy code, transforming templates from an old Java MVC architecture to front-end rendered
                    components, writing new features and components.
                </p>

                <p className="justify">
                    I've used both legacy technologies, such as angular.js and YUI, as well as a modern tech stack,
                    including react, webpack, css-modules, and more. Additionally I raised awareness for good UI and UX
                    design, which in 2019 turned me into the principal UI/UX designer on the team. This added
                    prototyping, user testing, and other design thinking tasks to my responsibilities.
                </p>

                <p className="justify">
                    Finally, I assisted with onboarding and guiding new junior front-end engineers, helping them to make
                    sense of the code base and to continue learning.
                </p>
            </div>

            <div className={styles.station}>
                <h4 className={styles.header}>
                    <div className={styles.company}>
                        <Triangles /> OE24 GmbH
                    </div>
                    <p className={styles.time}>January 2015 &mdash; July 2015</p>
                </h4>

                <p className="justify">
                    At OE24 GmbH, where I was a member of a team of seven, my tasks primarily focused on designing and
                    building new website components for advertisements and events, using a combination of plain
                    JavaScript, jQuery, and plain CSS.
                </p>

                <p className="justify">
                    For special events (such as the Eurovision Song Contest) I had the opportunity to experiment with
                    features like HTML Canvas and 3D animations.
                </p>
            </div>

            <div>
                <h4 className={styles.header}>
                    <div className={styles.company}>
                        <Triangles /> Syntax Design
                    </div>
                    <p className={styles.time}>September 2013 &mdash; December 2014</p>
                </h4>

                <p className="justify">
                    As an entrepreneur I made it my mission to offer small and middle-sized companies a complete
                    branding service. This service included the design and implementation of websites, both custombuilt
                    and realized with WordPress templates, as well as designing and printing business cards, letters,
                    envelopes and more.
                </p>
            </div>
        </ResumeSection>
    );
};

export default WorkExperience;
