import CVSectionHeaderDecoration from "../SectionHeaderDecoration/SectionHeaderDecoration"
import styles from "./SectionHeader.module.css"

interface IProps {
    color: string
    text: string
}

export default function MainEntryHeader(props: IProps) {
    return (
        <div className={styles.cvSectionHeader}>
            <CVSectionHeaderDecoration color={props.color}/>
            <div className={styles.cvSectionText}>{props.text}</div>
            <CVSectionHeaderDecoration color={props.color}/>
        </div>
    )
}