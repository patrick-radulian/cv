import CVSectionHeaderDecoration from "../cvSectionHeaderDecoration/cvSectionHeaderDecoration"
import styles from "./cvSectionHeader.module.css"

interface IProps {
    color: string
    text: string
}

export default function MainEntryHeader(props: IProps) {
    return (
        <div className={styles.mainEntryHeader}>
            <CVSectionHeaderDecoration color={props.color}/>
            <div className={styles.mainEntryText}>{props.text}</div>
            <CVSectionHeaderDecoration color={props.color}/>
        </div>
    )
}