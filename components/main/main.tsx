import Section from "../Section/Section"
import SectionEntry from "../SectionEntry/SectionEntry"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.sections}>
            <Section color="#2B6F26" text="career">
                <SectionEntry left="ui/ux/product design, user research, prototyping, front-end development" center="Aug 2015 &mdash; Now" right="semantic web company gmbh"/>
                <SectionEntry left="graphic/ui/ux design, front-end development" center="Dec 2014 &mdash; Jul 2015" right="oe24 gmbh"/>
                <SectionEntry left="graphic-, web-, print design" center="Sep 2013 &mdash; Nov 2014" right="syntax design"/>
                <SectionEntry left="graphic design, coding, sales" center="Apr 2011 &mdash; Aug 2013" right="di hans a. gruber kg"/>
                <SectionEntry left="tuition (english)" center="Aug 2008 &mdash; Apr 2010" right="lernstudio kids-bül gmbh"/>
                <SectionEntry left="data management" center="Dec 2007 &mdash; Aug 2008" right="yumyum media gmbh"/>
                <SectionEntry left="graphic-, print design, print operations" center="Nov 2006 &mdash; Nov 2007" right="cutstudio eisenstadt werbetechnik"/>
            </Section>

            <Section color="#BD7E31" text="education">
                <SectionEntry left="continuous career specific education" center="active" right="udacity, interaction design foundation"/>
                <SectionEntry left="teacher training program" center="Oct 2008 &mdash; Oct 2010" right="university of vienna"/>
                <SectionEntry left="digital animation program" center="Nov 2003 &mdash; Mar 2005" right="sae institute of vienna"/>
                <SectionEntry left="high school certificate with focus on arts" center="Sep 1995 &mdash; Jun 2003" right="ahs kurzwiese, eisenstadt"/>
            </Section>

            <Section color="#B9274F" text="skills">
                <SectionEntry left="sketching, wireframing, rapid/paper prototyping, low-high fidelity prototyping, animation" center="ui/ux" right="design thinking, interviewing, workshop facilitation, moderation, story telling, user research, quantitative user testing"/>
                <SectionEntry left="html, css, js, ts, jquery, angular, react, next, c#, material design, polymer" center="web/dev" right="node, mongodb, graphdb, git, webpack, sql"/>
                <SectionEntry left="autodesk sketchboo, proto.io, figma, pen &amp; paper" center="graphic" right="adobe creative suite, affinity suite, invision, uxpin"/>
            </Section>

            <Section color="#2E3192" text="languages &amp; hobbies">
                <SectionEntry left="german (2nd mother tongue)" center="" right="reading (fantasy, sci-fi), astronomy"/>
                <SectionEntry left="romanian (mother tongue)" center="" right="gaming, d&amp;d"/>
                <SectionEntry left="english (fluent)" center="" right="Wwoodworking"/>
            </Section>
        </div>
    )
}