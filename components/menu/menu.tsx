import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./menu.module.css"
import SignatureSVG from "../../public/images/Signature.svg"
import SignaturePNG from "../../public/images/Signature.png"

const Menu: React.FC<{}> = () => {
    return (
        <div className={styles["menu-container"]}>
            <div className={styles.menu}>
                <Image src={SignaturePNG} objectFit="contain" className={styles.signature}/>

                <div className={`${styles.cloud} ${styles.cloud1}`}/>
                <div className={`${styles.cloud} ${styles.cloud2}`}/>

                <div className={styles.links}>
                    <Link href="/portfolio" ><a className={styles.link}>Portfolio</a></Link>
                    <Link href="/cv"><a className={styles.link}>CV</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;