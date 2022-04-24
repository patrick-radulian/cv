import React from "react"
import styles from "./skill-meter.module.css"

type SkillMeterProps = {
    skillLevel: number
    skillFraction: "full" | "half"
}

const SkillMeter: React.FC<SkillMeterProps> = ({skillLevel, skillFraction}) => {
    return (
        <div className={styles["skill-meter"]}>
            {Array.from(Array(5).keys()).map(n => {
                let style: React.CSSProperties = {
                    opacity: 0.5
                };

                if (n < skillLevel) style.opacity = 1;

                return <div className={styles["skill-meter-section"]} style={style}/>;
            })}
        </div>
    )
}

export default SkillMeter;