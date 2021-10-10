import Section from "../Section/Section"
import SectionEntry from "../SectionEntry/SectionEntry"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.sections}>
            <Section color="#2B6F26" text="career">
                <SectionEntry
                    left="ui/ux/product design, user research, prototyping, front-end development"
                    center="Aug 2015 &mdash; Now"
                    right="semantic web company gmbh"
                />

                <SectionEntry
                    left="graphic/ui/ux design, front-end development"
                    center="Dec 2014 &mdash; Jul 2015"
                    right="oe24 gmbh"
                />

                <SectionEntry
                    left="graphic-, web-, print design"
                    center="Sep 2013 &mdash; Nov 2014"
                    right="syntax design"
                />

                <SectionEntry
                    left="graphic design, coding, sales"
                    center="Apr 2011 &mdash; Aug 2013"
                    right="di hans a. gruber kg"
                />

                <SectionEntry
                    left="tuition (english)"
                    center="Aug 2008 &mdash; Apr 2010"
                    right="lernstudio kids-bül gmbh"
                />

                <SectionEntry
                    left="data management"
                    center="Dec 2007 &mdash; Aug 2008"
                    right="yumyum media gmbh"
                />

                <SectionEntry
                    left="graphic-, print design, print operations"
                    center="Nov 2006 &mdash; Nov 2007"
                    right="cutstudio eisenstadt werbetechnik"
                />
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