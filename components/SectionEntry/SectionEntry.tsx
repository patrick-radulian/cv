import styles from "./SectionEntry.module.css"

interface IProps {
    children: string
    align: AlignSetting
}

export default function CVSectionEntry(props: IProps) {
    return (
        <div className={styles.cvSectionEntry} style={{textAlign: props.align}}>
            {props.children}
        </div>
    )
}