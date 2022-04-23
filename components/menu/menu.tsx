import React from "react"
import Link from "next/link"
import Image from "next/image"
import styles from "./menu.module.css"
import SignaturePNG from "../../public/images/Signature2.png"

const Menu: React.FC<{}> = () => {
    return (
        <div className={styles["menu-container"]}>
            <div className={styles.menu}>
                <Image src={SignaturePNG} objectFit="contain" className={styles.signature}/>

                <div className={styles.links}>
                    <Link href="/portfolio" ><a className={styles.link}>Portfolio</a></Link>
                    <Link href="/cv"><a className={styles.link}>CV</a></Link>
                </div>
            </div>
        </div>
    )
}

export default Menu;