import React from "react";
import ResumeSection from "../resume-section/resume-section";
import styles from "./skills.module.css";
import SkillsIcon from "src/images/sections/Skills-Icon.svg";
import HTML from "src/images/skills/HTML.svg";
import CSS from "src/images/skills/CSS.svg";
import JS from "src/images/skills/JS.svg";
import REACT from "src/images/skills/React.svg";
import TS from "src/images/skills/TS.svg";
import UXPIN from "src/images/skills/UXPin.svg";
import ADOBECS from "src/images/skills/AdobeCS.svg";
import PROTOIO from "src/images/skills/ProtoIO.svg";
import UNITY from "src/images/skills/Unity.svg";
import UNREAL from "src/images/skills/UE.svg";
import PRESENTING from "src/images/skills/Presenting.svg";
import PROTOTYPING from "src/images/skills/Prototyping.svg";
import DT from "src/images/skills/DesignThinking.svg";
import INTERVIEWING from "src/images/skills/Interviewing.svg";
import STORYTELLING from "src/images/skills/StoryTelling.svg";
import USERRESEARCH from "src/images/skills/UserResearch.svg";
import FACILITATING from "src/images/skills/Facilitating.svg";
import FIGMA from "src/images/skills/Figma.svg";
import SKETCHING from "src/images/skills/Sketching.svg";
import AFFINITY from "src/images/skills/affinity.svg";
import GODOT from "src/images/skills/Godot.svg";

const Skills: React.FC = () => {
    return (
        <>
            <ResumeSection className={styles.skills} icon={SkillsIcon} label="Skills">
                <div className={styles["skill-grid"]}>
                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img
                                src={PRESENTING}
                                width={80}
                                height={80}
                                className={styles.skill}
                                alt=""
                                loading="lazy"
                            />
                            <strong className={styles["skill-name"]}>Presenting</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img
                                src={PROTOTYPING}
                                width={80}
                                height={80}
                                className={styles.skill}
                                alt=""
                                loading="lazy"
                            />
                            <strong className={styles["skill-name"]}>Prototyping</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img src={DT} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Design Thinking</strong>
                        </div>
                    </div>

                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img src={INTERVIEWING} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Interviewing</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img src={STORYTELLING} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Story Telling</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img src={USERRESEARCH} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>User Research</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-a"]}`}>
                            <img src={FACILITATING} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Facilitating</strong>
                        </div>
                    </div>

                    <div className={`${styles["skill-group"]} ${styles.centered}`}>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://proto.io/"
                            target="_blank"
                        >
                            <img src={PROTOIO} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Proto.io</strong>
                        </a>
                        <div className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}>
                            <img src={SKETCHING} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Sketching</strong>
                        </div>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://www.uxpin.com/"
                            target="_blank"
                        >
                            <img src={UXPIN} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>UXPin</strong>
                        </a>
                    </div>

                    <div className={`${styles["skill-group"]} ${styles.centered}`}>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://www.figma.com/"
                            target="_blank"
                        >
                            <img src={FIGMA} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Figma</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://www.adobe.com/creativecloud.html"
                            target="_blank"
                        >
                            <img src={ADOBECS} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>AdobeCS</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://affinity.serif.com/"
                            target="_blank"
                        >
                            <img src={AFFINITY} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Affinity</strong>
                        </a>
                    </div>

                    <div className={styles["skill-group"]}>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                            target="_blank"
                            title="HTML"
                        >
                            <img src={HTML} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>HTML</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                            target="_blank"
                        >
                            <img src={CSS} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>CSS</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                            target="_blank"
                        >
                            <img src={JS} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>JavaScript</strong>
                        </a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://reactjs.org/"
                            target="_blank"
                        >
                            <img src={REACT} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>React</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-b"]}`}
                            href="https://www.typescriptlang.org/"
                            target="_blank"
                        >
                            <img src={TS} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>TypeScript</strong>
                        </a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-c"]}`}
                            href="https://unity.com/"
                            target="_blank"
                        >
                            <img src={UNITY} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Unity</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-c"]}`}
                            href="https://godotengine.org/"
                            target="_blank"
                        >
                            <img src={GODOT} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Godot</strong>
                        </a>
                        <a
                            className={`${styles["skill-container"]} ${styles["skill-size-c"]}`}
                            href="https://www.unrealengine.com/"
                            target="_blank"
                        >
                            <img src={UNREAL} className={styles.skill} alt="" loading="lazy" />
                            <strong className={styles["skill-name"]}>Unreal Engine</strong>
                        </a>
                    </div>
                </div>
            </ResumeSection>
        </>
    );
};

export default Skills;
