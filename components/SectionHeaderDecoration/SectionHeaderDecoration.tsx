import styles from "./SectionHeaderDecoration.module.css";

interface IProps {
    color: string
}

export default function CVSectionHeaderDecoration(props: IProps) {
    return (
        <div className={styles.mainEntryDecoration} style={{background: props.color}}></div>
    )
}