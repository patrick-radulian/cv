import React from "react"
import styles from "./clouds.module.css"

const Clouds: React.FC<{}> = () => {
    return (
        <div className={styles.clouds}>
            <div className={`${styles.cloud} ${styles.cloud1}`}/>
            <div className={`${styles.cloud} ${styles.cloud2}`}/>
        </div>
    )
}

export default Clouds;