import MainEntry from "../mainEntry/mainEntry"
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.mainEntries}>
            <MainEntry color="#2B6F26" text="career"/>
            <MainEntry color="#BD7E31" text="education"/>
            <MainEntry color="#B9274F" text="skills"/>
            <MainEntry color="#2E3192" text="languages &amp; hobbies"/>
        </div>
    )
}