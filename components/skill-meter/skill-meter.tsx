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
                let className: string = "";

                if (n === skillLevel) {
                    className = skillFraction;
                } else if (n > skillLevel) {
                    className = "empty";
                }

                return (
                    <div className={styles["skill-meter-section"]}>
                        <div className={`${styles["skill-meter-section-fill"]} ${className}`}/>
                    </div>
                );
            })}
        </div>
    )
}

export default SkillMeter;