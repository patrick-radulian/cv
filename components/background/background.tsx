import React from "react"
import Image from "next/image"
import styles from "./background.module.css"
import BackgroundImage from "../../public/images/Mountain-Original.jpg";

const Background: React.FC<{}> = ({children}) => {
    return (
        <>
            <div className={styles["background-container"]} style={{background: "#000000"}}>
                <Image priority src={BackgroundImage} layout="fill" objectFit="cover" quality={100} placeholder="blur"/>

                <div className={`${styles.cloud} ${styles.cloud1}`}/>
                <div className={`${styles.cloud} ${styles.cloud2}`}/>
            </div>

            {children}
        </>
    )
}

export default Background;