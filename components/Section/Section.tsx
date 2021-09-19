import { ReactElement } from "react"
import CVSectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Section.module.css"

interface IProps {
    color: string
    text: string
    children: ReactElement | Array<ReactElement>
}

export default function Section(props: IProps) {
    return (
        <>
            <section className={styles.section}>
                <CVSectionHeader color={props.color} text={props.text}/>

                <div className={styles.sectionEntries}>
                    {props.children}
                </div>
            </section>
        </>
    )
}