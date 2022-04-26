import React from "react"
import Image from "next/image"
import CVSection from "../cv-section/cv-section";
import styles from "./skills.module.css"
import SkillsIcon from "public/images/Skills-Icon.svg"
import HTML from "public/images/skills/HTML.svg"
import CSS from "public/images/skills/CSS.svg"
import JS from "public/images/skills/JS.svg"
import REACT from "public/images/skills/React.svg"
import TS from "public/images/skills/TS.svg"
import UXPIN from "public/images/skills/UXPin.svg"
import ADOBECS from "public/images/skills/AdobeCS.svg"
import PROTOIO from "public/images/skills/ProtoIO.svg"
import WEBPACK from "public/images/skills/Webpack.svg"
import GIT from "public/images/skills/Git.svg"
import UNITY from "public/images/skills/Unity.svg"
import UNREAL from "public/images/skills/UE.svg"
import CS from "public/images/skills/CS.svg"
import NODE from "public/images/skills/Node.svg"
import PRESENTING from "public/images/skills/Presenting.svg"
import PROTOTYPING from "public/images/skills/Prototyping.svg"
import DT from "public/images/skills/DesignThinking.svg"
import INTERVIEWING from "public/images/skills/Interviewing.svg"
import STORYTELLING from "public/images/skills/StoryTelling.svg"
import USERRESEARCH from "public/images/skills/UserResearch.svg"
import FACILITATING from "public/images/skills/Facilitating.svg"

const Skills: React.FC<{}> = () => {
    return (
        <div className={styles.skills}>
            <CVSection icon={SkillsIcon} label="Skills">
                <div className={styles["skill-grid"]}>
                    <div className={styles["skill-group"]}>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank"><Image src={HTML} width={80} height={80} className={styles.skill}/></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank"><Image src={CSS} width={80} height={80} className={styles.skill}/></a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"><Image src={JS} width={80} height={80} className={styles.skill}/></a>
                        <a href="https://reactjs.org/" target="_blank"><Image src={REACT} width={80} height={80} className={styles.skill}/></a>
                        <a href="https://www.typescriptlang.org/" target="_blank"><Image src={TS} width={80} height={80} className={styles.skill}/></a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a href="https://www.uxpin.com/" target="_blank"><Image src={UXPIN} width={70} height={70} className={styles.skill}/></a>
                        <a href="https://www.adobe.com/creativecloud.html" target="_blank"><Image src={ADOBECS} width={70} height={70} className={styles.skill}/></a>
                        <a href="https://proto.io/" target="_blank"><Image src={PROTOIO} width={70} height={70} className={styles.skill}/></a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a href="https://webpack.js.org/" target="_blank"><Image src={WEBPACK} width={60} height={60} className={styles.skill}/></a>
                        <a href="https://git-scm.com/" target="_blank"><Image src={GIT} width={60} height={60} className={styles.skill}/></a>
                        <a href="https://unity.com/" target="_blank"><Image src={UNITY} width={60} height={60} className={styles.skill}/></a>
                        <a href="https://www.unrealengine.com/" target="_blank"><Image src={UNREAL} width={60} height={60} className={styles.skill}/></a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <a href="https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/" target="_blank"><Image src={CS} width={50} height={50} className={styles.skill}/></a>
                        <a href="https://nodejs.org/" target="_blank"><Image src={NODE} width={50} height={50} className={styles.skill}/></a>
                    </div>
                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                            <Image src={PRESENTING} width={60} height={60} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Presenting</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                        <Image src={PROTOTYPING} width={60} height={60} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Prototyping</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-a"]}`}>
                        <Image src={DT} width={60} height={60} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Design Thinking</strong>
                        </div>
                    </div>

                    <div className={styles["skill-group"]}>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <Image src={INTERVIEWING} width={50} height={50} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Interviewing</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <Image src={STORYTELLING} width={50} height={50} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Story Telling</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <Image src={USERRESEARCH} width={50} height={50} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>User Research</strong>
                        </div>
                        <div className={`${styles["skill-container"]} ${styles["skill-container-b"]}`}>
                            <Image src={FACILITATING} width={50} height={50} className={styles.skill}/>
                            <strong className={styles["skill-name"]}>Facilitating</strong>
                        </div>
                    </div>
                </div>
            </CVSection>
        </div>
    )
}

export default Skills;