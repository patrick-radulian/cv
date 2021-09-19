import Section from "../Section/Section"
import CVSectionEntry from "../SectionEntry/SectionEntry"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.mainEntries}>
            <Section color="#2B6F26" text="career">
                <CVSectionEntry align="right">
                    ui/ux/product design, user research, prototyping, front-end development
                </CVSectionEntry>

                <CVSectionEntry align="center">
                    August 2015 &mdash; Now
                </CVSectionEntry>

                <CVSectionEntry align="left">
                    semantic web company gmbh
                </CVSectionEntry>
            </Section>

            <Section color="#BD7E31" text="education">
                <div></div>
            </Section>

            <Section color="#B9274F" text="skills">
                <div></div>
            </Section>

            <Section color="#2E3192" text="languages &amp; hobbies">
                <div></div>
            </Section>
        </div>
    )
}