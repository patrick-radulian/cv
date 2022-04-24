import React from "react"
import Image from "next/image"
import styles from "./arrow.module.css"
import ArrowBase from "../../public/images/Arrow-Base.png"
import ArrowV from "../../public/images/Arrow-V.png"

const Arrow: React.FC<{}> = () => {
    return (
        <div className={styles.arrow}>
            <div className={styles["arrow-base"]}><Image priority src={ArrowBase}/></div>
            <div className={styles["arrow-v"]}><Image priority src={ArrowV}/></div>
        </div>
    )
}

export default Arrow;