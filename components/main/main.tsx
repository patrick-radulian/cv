import CVSection from "../cvSection/cvSection"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.mainEntries}>
            <CVSection color="#2B6F26" text="career">
                <div></div>
            </CVSection>

            <CVSection color="#BD7E31" text="education">
                <div></div>
            </CVSection>

            <CVSection color="#B9274F" text="skills">
                <div></div>
            </CVSection>

            <CVSection color="#2E3192" text="languages &amp; hobbies">
                <div></div>
            </CVSection>
        </div>
    )
}