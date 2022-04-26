import React from "react"
import CVSection from "../cv-section/cv-section";
import WorkIcon from "../../public/images/Work-Icon.svg"
import Triangles from "../triangles/triangles";
import styles from "./work-experience.module.css"

const WorkExperience: React.FC<{}> = () => {
    return (
        <>
            <CVSection icon={WorkIcon} label="Work Experience">
                <div className="swiper-no-swiping">
                    <h4>
                        <Triangles/> August 2015 &mdash; March 2022
                    </h4>

                    <p className="justify">
                        Initially I joined Semantic Web Company as a front-end engineer, becoming a part of the product
                        development scrum-team which counted eight engineers. My responsibilities encompassed
                        refactoring legacy code, transforming templates from an old Java MVC architecture to front-end
                        rendered components, writing new features and components.
                    </p>

                    <p className="justify">
                        I've used both legacy technologies, such as angular.js and YUI, as well as a modern tech stack,
                        including react, webpack, css-modules, and more. Additionally I raised awareness for good UI
                        and UX design, which in 2019 turned me into the principal UI/UX designer on the team. This added
                        prototyping, user testing, and other design thinking tasks to my responsibilities.
                    </p>

                    <p className="justify">
                        Finally, I assisted with onboarding and guiding new junior front-end engineers, helping them to
                        make sense of the code base and to continue learning.
                    </p>

                    <p className={styles.company}>
                        <em>&mdash; Semantic Web Company GmbH</em>
                    </p>
                </div>

                <div className="swiper-no-swiping">
                    <h4>
                        <Triangles/> January 2015 &mdash; July 2015
                    </h4>

                    <p className="justify">
                        At OE24 GmbH, where I was a member of a team of seven, my tasks primarily focused on
                        designing and building new website components for advertisements and events, using a
                        combination of plain JavaScript, jQuery, and plain CSS.
                    </p>

                    <p className="justify">
                        For special events (such as the Eurovision Song Contest) I had the opportunity to experiment with
                        features like HTML Canvas and 3D animations.
                    </p>

                    <p className={styles.company}>
                        <em>&mdash; OE24 GmbH</em>
                    </p>
                </div>

                <div className="swiper-no-swiping">
                    <h4>
                        <Triangles/> September 2013 &mdash; December 2014
                    </h4>

                    <p className="justify">
                        As an entrepreneur I made it my mission to offer small and middle-sized companies a complete
                        branding service. This service included the design and implementation of websites, both custombuilt
                        and realized with WordPress templates, as well as designing and printing business cards,
                        letters, envelopes and more.
                    </p>

                    <p className={styles.company}>
                        <em>&mdash; Syntax Design</em>
                    </p>
                </div>
            </CVSection>
        </>
    )
}

export default WorkExperience;