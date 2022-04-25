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
                        <Image src={HTML} width={80} height={80}/>
                        <Image src={CSS} width={80} height={80}/>
                        <Image src={JS} width={80} height={80}/>
                        <Image src={REACT} width={80} height={80}/>
                        <Image src={TS} width={80} height={80}/>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-b"]}`}>
                        <Image src={UXPIN} width={60} height={60}/>
                        <Image src={ADOBECS} width={60} height={60}/>
                        <Image src={PROTOIO} width={60} height={60}/>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-c"]}`}>
                        <Image src={WEBPACK} width={45} height={45}/>
                        <Image src={GIT} width={45} height={45}/>
                        <Image src={UNITY} width={45} height={45}/>
                        <Image src={UNREAL} width={45} height={45}/>
                    </div>
                    <div className={`${styles["skill-group"]} ${styles["group-d"]}`}>
                        <Image src={CS} layout="fill" objectFit="contain"/>
                        <Image src={CS} layout="fill" objectFit="contain"/>
                    </div>
                </div>
            </CVSection>
        </div>
    )
}

export default Skills;