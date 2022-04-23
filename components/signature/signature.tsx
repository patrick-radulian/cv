import React from "react"
import Image from "next/image"
import styles from "./signature.module.css"
import SignatureSVG from "../../public/images/Signature.svg"

const Signature: React.FC<{}> = () => {
    return (
        <div className={styles["signature-container"]}>
            <Image src={SignatureSVG} className={styles.signature}/>
        </div>
    )
}

export default Signature;