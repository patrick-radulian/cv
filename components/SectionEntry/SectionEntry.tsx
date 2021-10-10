import styles from "./SectionEntry.module.css"

interface IProps {
    left: string
    center: string
    right: string
}

export default function SectionEntry(props: IProps) {
    return (
        <>
            <div></div>
            <div className={styles.sectionEntry_left}>{props.left}</div>
            <div className={styles.sectionEntry_center}>{props.center}</div>
            <div className={styles.sectionEntry_right}>{props.right}</div>
            <div></div>
        </>
    )
}