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

const Skills: React.FC<{}> = () => {
    return (
        <div className={styles.skills}>
            <CVSection icon={SkillsIcon} label="Skills">
                <div className={styles["skill-grid"]}>
                    <div className={`${styles["skill-group"]} ${styles["group-a"]}`}>
                        <div className={styles.skill}>
                            <Image src={HTML} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={CSS} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={JS} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={REACT} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={TS} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-b"]}`}>
                        <div className={styles.skill}>
                            <Image src={UXPIN} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={ADOBECS} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={PROTOIO} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-c"]}`}>
                        <div className={styles.skill}>
                            <Image src={WEBPACK} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={GIT} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={UNITY} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={UNREAL} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-d"]}`}>
                        <div className={styles.skill}>
                            <Image src={CS} layout="fill" objectFit="contain"/>
                        </div>
                        <div className={styles.skill}>
                            <Image src={NODE} layout="fill" objectFit="contain"/>
                        </div>
                    </div>
                </div>
            </CVSection>
        </div>
    )
}

export default Skills;