import React from "react"
import Image from "next/image"
import styles from "./cv.module.css"
import Portrait from "../../public/images/Portrait.png"
import About from "../about/about"
import WorkExperience from "../work-experience/work-experience"
import Education from "../education/education"
import Skills from "../skills/skills"

const CV: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <header className={styles.header}>
                    <Image src={Portrait} width={200} height={196} objectFit="contain"/>

                    <div className={styles.tags}>
                        <p className={styles.tag}>Frontend Engineer</p>
                        <p className={styles.tag}>UI/UX Designer</p>
                        <p className={styles.tag}>Dreamer</p>
                    </div>
                </header>

                <About/>

                <WorkExperience/>

                <Education/>

                <Skills/>
            </div>
        </div>
    )
}

export default CV;