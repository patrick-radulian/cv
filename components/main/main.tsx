import React from "react"
import SwipeableViews from 'react-swipeable-views'
import styles from "./main.module.css"
import CV from "components/cv/cv";
import Portfolio from "components/portfolio/portfolio";

const Main: React.FC<{}> = () => {
    const [index, setIndex] = React.useState<number>(0);

    return (
        <main className={styles.main}>
            <nav className={styles.nav}>
                <button className={styles["nav-button"]} onClick={() => setIndex(0)}>
                    <div className={`${styles.bullet} ${index === 0 && "active"}`}/>
                </button>

                <button className={styles["nav-button"]} onClick={() => setIndex(1)}>
                    <div className={`${styles.bullet} ${index === 1 && "active"}`}/>
                </button>
            </nav>

            <SwipeableViews index={index} onChangeIndex={index => setIndex(index)} hysteresis={0.2}>
                <CV/>
                <Portfolio/>
            </SwipeableViews>
        </main>
    )
}

export default Main;