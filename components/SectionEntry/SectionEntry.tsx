import styles from "./SectionEntry.module.css"

interface IProps {
    children: string
    position: "left" | "center" | "right"
}

export default function SectionEntry(props: IProps) {
    return (
        <div className={styles.sectionEntry} data-position={props.position}>
            {props.children}
        </div>
    )
}