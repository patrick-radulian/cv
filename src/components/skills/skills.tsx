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
import WEBPACK from "src/images/skills/Webpack.svg";
import GIT from "src/images/skills/Git.svg";
import UNITY from "src/images/skills/Unity.svg";
import UNREAL from "src/images/skills/UE.svg";
import CS from "src/images/skills/CS.svg";
import NODE from "src/images/skills/Node.svg";
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

const Skills: React.FC = () => {
    return (
        <>
            <ResumeSection className={styles.skills} icon={SkillsIcon} label="Skills">
                <div className={styles["skill-grid"]}>
                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                            <img src={PRESENTING} width={80} height={80} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Presenting</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                            <img src={PROTOTYPING} width={80} height={80} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Prototyping</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                            <img src={DT} width={80} height={80} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Design Thinking</strong>
                        </div>
                    </div>

                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <img src={INTERVIEWING} width={65} height={65} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Interviewing</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <img src={STORYTELLING} width={65} height={65} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Story Telling</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <img src={USERRESEARCH} width={65} height={65} className={styles.skill} />
                            <strong className={styles["skill-name"]}>User Research</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <img src={FACILITATING} width={65} height={65} className={styles.skill} />
                            <strong className={styles["skill-name"]}>Facilitating</strong>
                        </div>
                    </div>

                    <div className={`${styles["skill-group"]} ${styles.centered}`}>
                        <div className={styles["skill-container"]}>
                            <a href="https://proto.io/" target="_blank">
                                <img src={PROTOIO} width={70} height={70} className={styles.skill} />
                                <strong className={styles["skill-name"]}>Proto.io</strong>
                            </a>
                        </div>
                        <div className={styles["skill-container"]}>
                            <a target="_blank">
                                <img src={SKETCHING} width={90} height={90} className={styles.skill} />
                                <strong className={styles["skill-name"]}>Sketching</strong>
                            </a>
                        </div>

                        <div className={styles["skill-container"]}>
                            <a href="https://www.uxpin.com/" target="_blank">
                                <img src={UXPIN} width={70} height={70} className={styles.skill} />
                                <strong className={styles["skill-name"]}>UXPin</strong>
                            </a>
                        </div>
                    </div>

                    <div className={`${styles["skill-group"]} ${styles.centered}`}>
                        <div className={styles["skill-container"]}>
                            <a href="https://www.figma.com/" target="_blank">
                                <img src={FIGMA} width={70} height={70} className={styles.skill} />
                                <strong className={styles["skill-name"]}>Figma</strong>
                            </a>
                        </div>
                        <div className={styles["skill-container"]}>
                            <a href="https://www.adobe.com/creativecloud.html" target="_blank">
                                <img src={ADOBECS} width={70} height={70} className={styles.skill} />
                                <strong className={styles["skill-name"]}>AdobeCS</strong>
                            </a>
                        </div>
                        <div className={styles["skill-container"]}>
                            <a href="https://affinity.serif.com/" target="_blank">
                                <img src={AFFINITY} width={70} height={70} className={styles.skill} />
                                <strong className={styles["skill-name"]}>Affinity</strong>
                            </a>
                        </div>
                    </div>

                    <div className={styles["skill-group"]}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" title="HTML">
                            <img src={HTML} width={80} height={80} className={styles.skill} />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">
                            <img src={CSS} width={80} height={80} className={styles.skill} />
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
                            <img src={JS} width={80} height={80} className={styles.skill} />
                        </a>
                        <a href="https://reactjs.org/" target="_blank">
                            <img src={REACT} width={80} height={80} className={styles.skill} />
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank">
                            <img src={TS} width={80} height={80} className={styles.skill} />
                        </a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a href="https://webpack.js.org/" target="_blank">
                            <img src={WEBPACK} width={60} height={60} className={styles.skill} />
                        </a>
                        <a href="https://git-scm.com/" target="_blank">
                            <img src={GIT} width={60} height={60} className={styles.skill} />
                        </a>
                        <a href="https://unity.com/" target="_blank">
                            <img src={UNITY} width={60} height={60} className={styles.skill} />
                        </a>
                        <a href="https://www.unrealengine.com/" target="_blank">
                            <img src={UNREAL} width={60} height={60} className={styles.skill} />
                        </a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank">
                            <img src={CS} width={50} height={50} className={styles.skill} />
                        </a>
                        <a href="https://nodejs.org/" target="_blank">
                            <img src={NODE} width={50} height={50} className={styles.skill} />
                        </a>
                    </div>
                </div>
            </ResumeSection>
        </>
    );
};

export default Skills;
