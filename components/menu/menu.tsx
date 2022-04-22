import React from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "../button/button";
import styles from "./menu.module.css"
import SignatureSVG from "../../public/images/Signature.svg"

const Menu: React.FC<{}> = () => {
    const onClickPortfolio = React.useCallback(e => {
        console.log(e);
    }, []);

    const onClickCV = React.useCallback(e => {
        console.log(e);
    }, []);

    return (
        <div className={styles.menu}>
            <Image src={SignatureSVG} className={styles.signature}/>

            <div className={styles.links}>
                <Link href="/portfolio" ><a className={styles.link}>Portfolio</a></Link>
                <Link href="/cv"><a className={styles.link}>CV</a></Link>
            </div>
        </div>
    )
}

export default Menu;