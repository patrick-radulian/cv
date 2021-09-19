import SectionHeaderDecoration from "../SectionHeaderDecoration/SectionHeaderDecoration"
import styles from "./SectionHeader.module.css"

interface IProps {
    color: string
    text: string
}

export default function SectionHeader(props: IProps) {
    return (
        <div className={styles.sectionHeader}>
            <SectionHeaderDecoration color={props.color}/>
            <div className={styles.sectionText}>{props.text}</div>
            <SectionHeaderDecoration color={props.color}/>
        </div>
    )
}