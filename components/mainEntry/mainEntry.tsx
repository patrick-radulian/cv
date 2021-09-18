import MainEntryDecoration from "../mainEntryDecoration/mainEntryDecoration"
import styles from "./mainEntry.module.css"

interface IProps {
    color: string
    text: string
}
export default function MainEntry(props: IProps) {
    return (
        <div className={styles.mainEntry}>
            <MainEntryDecoration color={props.color}/>
            <div className={styles.mainEntryText}>{props.text}</div>
            <MainEntryDecoration color={props.color}/>
        </div>
    )
}