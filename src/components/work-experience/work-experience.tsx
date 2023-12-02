import React from "react";
import ResumeSection from "../resume-section/resume-section";
import WorkIcon from "src/images/sections/Work-Icon.svg";
import Triangles from "../triangles/triangles";
import styles from "./work-experience.module.css";

const WorkExperience: React.FC = () => {
    return (
        <ResumeSection icon={WorkIcon} label="Work Experience">
            <div className={styles.station}>
                <div className={styles.triangles}>
                    <Triangles />
                </div>
                <strong className={styles.employer}>Dynatrace Austria GmbH</strong>
                <p className={styles.position}>
                    <em>Senior Software Engineer</em>
                </p>
                <p className={styles.time}>
                    <em>Since Aug. 2022</em>
                </p>
                <div className={styles.description}>
                    <ul>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Improvement of the existing applications and the design system using React, Node, Styled
                                Components, etc.
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Roughly 50 new unit tests (Jest), E2E tests & visual regression tests (TestCafé &
                                Playwright) to improve test coverage by around 15%
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Automation of app translation with Jenkins to speed up the i18n workflow by around 50%
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.station}>
                <div className={styles.triangles}>
                    <Triangles />
                </div>
                <strong className={styles.employer}>TheVentury GmbH</strong>
                <p className={styles.position}>
                    <em>Senior Frontend Engineer</em>
                </p>
                <p className={styles.time}>
                    <em>May 2022 - July 2022</em>
                </p>
                <div className={styles.description}>
                    <ul>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Maintenance and further development of existing legacy and vanilla js applications for 3
                                major customers
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Refactoring and new development of React / PHP applications for several small companies
                            </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.station}>
                <div className={styles.triangles}>
                    <Triangles />
                </div>
                <strong className={styles.employer}>Semantic Web Company GmbH</strong>
                <p className={styles.position}>
                    <em>Frontend Engineer & UI/UX Designer</em>
                </p>
                <p className={styles.time}>
                    <em>Aug. 2015 - May 2022</em>
                </p>
                <div className={styles.description}>
                    <ul>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">3 years internal Design Thinking Advocate</span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                UI/UX design of 5 applications and over 50 features, from sketches and early paper
                                prototypes interactive code prototypes
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                User interviews and early user tests for around 5 internal projects / features
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">Moderation of a two-day internal design sprint</span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Maintenance and refactoring of existing legacy code applications
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                New development of over 50 features using vanilla-js, Angular, React, jQuery, D3
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Integration of the frontend with a semantic web backend architecture
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">Mentoring for junior front-end developers</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.station}>
                <div className={styles.triangles}>
                    <Triangles />
                </div>
                <strong className={styles.employer}>OE24 GmbH</strong>
                <p className={styles.position}>
                    <em>Frontend Engineer</em>
                </p>
                <p className={styles.time}>
                    <em>Jan. 2015 - July 2015</em>
                </p>
                <div className={styles.description}>
                    <ul>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">Design and development of 4 new websites</span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Design of special event pages such as Eurovision Song Contest
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">Vanilla-js, jQuery, CSS, HTML Canvas & 3D Animation</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={styles.station}>
                <div className={styles.triangles}>
                    <Triangles />
                </div>
                <strong className={styles.employer}>Syntax Design</strong>
                <p className={styles.position}>
                    <em>Web designer & graphic designer</em>
                </p>
                <p className={styles.time}>
                    <em>Sep. 2013 - Dec. 2014</em>
                </p>
                <div className={styles.description}>
                    <ul>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">Branding service</span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Design and development of websites (handmade and using templates) for 4 SMEs
                            </span>
                        </li>
                        <li>
                            <span className="bullet">•</span>
                            <span className="bullet-value">
                                Design and production of various printed materials (business cards, stationery,
                                envelopes, etc.) as a cooperation partner for around 50 customers
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </ResumeSection>
    );
};

export default WorkExperience;
