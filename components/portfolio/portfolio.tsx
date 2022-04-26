import React from "react"
import Image from "next/image"
import styles from "./portfolio.module.css"
import GitHubIcon from "public/images/GitHub.png"
import CodePenIcon from "public/images/Codepen.svg"

const Portfolio: React.FC<{}> = () => {
    return (
        <div className={styles.container}>
            <a href="https://github.com/patrick-radulian" target="_blank" className={`${styles.link} swiper-no-swiping`}>
                <Image src={GitHubIcon} width={120} height={120}/>
                <p>GitHub Profile</p>
            </a>

            <a href="https://codepen.io/Tricon/pens/public" target="_blank" className={`${styles.link} swiper-no-swiping`}>
                <Image src={CodePenIcon} width={120} height={120}/>
                <p>CodePen Profile</p>
            </a>
        </div>
    )
}

export default Portfolio;