import Image from "next/image"
import styles from "./headerEntry.module.css"

interface IHeaderEntry {
    imageFileName: string
    imageAltText: string
    text: string
    link?: string
}

export default function HeaderEntry(props: IHeaderEntry) {
    return (
        <a className={styles.headerEntry} href={props.link} target="_blank">
            <Image src={`/images/${props.imageFileName}`} width={24} height={24} alt={props.imageAltText}/>
            <span className={styles.headerEntryText}>{props.text}</span>
        </a>
    )
}