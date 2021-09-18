import styles from "./mainEntryDecoration.module.css";

interface IProps {
    color: string
}

export default function MainEntryDecoration(props: IProps) {
    return (
        <div className={styles.mainEntryDecoration} style={{background: props.color}}></div>
    )
}