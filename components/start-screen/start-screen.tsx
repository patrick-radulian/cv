import React from "react"
import Image from "next/image"
import styles from "./start-screen.module.css"
import Firstname from "../../public/images/Patrick.png"
import Lastname from "../../public/images/Radulian.png"

const StartScreen: React.FC<{}> = () => {
    return (
        <div className={styles["start-screen-container"]}>
            <div className={styles.signature}>
                <div className={styles["first-name"]}><Image src={Firstname} objectFit="contain"/></div>
                <div className={styles["last-name"]}><Image src={Lastname} objectFit="contain"/></div>
            </div>
        </div>
    )
}

export default StartScreen;