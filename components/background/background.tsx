import React from "react"
import Image from "next/image"
import styles from "./background.module.css"
import BackgroundImage from "../../public/images/Mountain-Original.jpg";

const Background: React.FC<{}> = () => {
    return (
        <div className={styles["background-container"]} style={{background: "#000000"}}>
            <Image priority src={BackgroundImage} layout="fill" objectFit="cover" quality={100} placeholder="blur"/>
        </div>
    )
}

export default Background;