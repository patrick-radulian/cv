import Section from "../Section/Section"
import SectionEntry from "../SectionEntry/SectionEntry"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div>
            <Section color="#2B6F26" text="career">
                <SectionEntry position="left">
                    ui/ux/product design, user research, prototyping, front-end development
                </SectionEntry>

                <SectionEntry position="center">
                    August 2015 &mdash; Now
                </SectionEntry>

                <SectionEntry position="right">
                    semantic web company gmbh
                </SectionEntry>
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