import { ReactElement } from "react"
import CVSectionHeader from "../SectionHeader/SectionHeader"
import styles from "./Section.module.css"

interface IProps {
    color: string
    text: string
    children: ReactElement | Array<ReactElement>
}

export default function MainEntry(props: IProps) {
    return (
        <>
            <section className={styles.cvSection}>
                <CVSectionHeader color={props.color} text={props.text}/>

                <div className={styles.cvSectionEntries}>
                    {props.children}
                </div>
            </section>
        </>
    )
}