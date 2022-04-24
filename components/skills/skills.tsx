import React from "react"
import CVSection from "../cv-section/cv-section";
import styles from "./skills.module.css"
import SkillsIcon from "../../public/images/Skills-Icon.svg"
import SkillMeter from "../skill-meter/skill-meter";

const Skills: React.FC<{}> = () => {
    return (
        <div className={styles.skills}>
            <CVSection icon={SkillsIcon} label="Skills">
                <div className={styles["skill-grid"]}>
                    <div className={styles["skill-name"]}>HTML</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>CSS</div> <SkillMeter skillLevel={5} skillFraction="half"/>
                    <div className={styles["skill-name"]}>JavaScript</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>TypeScript</div> <SkillMeter skillLevel={4} skillFraction="half"/>
                    <div className={styles["skill-name"]}>React</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>C#</div> <SkillMeter skillLevel={2} skillFraction="half"/>
                    <div className={styles["skill-name"]}>Node</div> <SkillMeter skillLevel={3} skillFraction="half"/>
                    <div className={styles["skill-name"]}>Git</div> <SkillMeter skillLevel={3} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Webpack</div> <SkillMeter skillLevel={3} skillFraction="full"/>

                    <div>&nbsp;</div><div>&nbsp;</div>

                    <div className={styles["skill-name"]}>Presenting</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Wireframing</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Prototyping</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Animation</div> <SkillMeter skillLevel={3} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Design Thinking</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Interviewing</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Facilitating</div> <SkillMeter skillLevel={4} skillFraction="half"/>
                    <div className={styles["skill-name"]}>Story Telling</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>User Research</div> <SkillMeter skillLevel={3} skillFraction="full"/>

                    <div>&nbsp;</div><div>&nbsp;</div>

                    <div className={styles["skill-name"]}>Sketchbook</div> <SkillMeter skillLevel={3} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Proto.io</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>UXPin</div> <SkillMeter skillLevel={4} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Pen &amp; Paper</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>AdobeCS</div> <SkillMeter skillLevel={5} skillFraction="full"/>
                    <div className={styles["skill-name"]}>Unity</div> <SkillMeter skillLevel={4} skillFraction="half"/>
                    <div className={styles["skill-name"]}>Unreal Engine</div> <SkillMeter skillLevel={2} skillFraction="full"/>
                </div>
            </CVSection>
        </div>
    )
}

export default Skills;