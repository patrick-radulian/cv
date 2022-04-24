import React from "react"
import Image from "next/image"
import styles from "./triangles.module.css"
import TrianglesIcon from "../../public/images/Triangles.svg"

const Triangles: React.FC<{}> = () => {
    return (
        <span className={styles.triangles}><Image src={TrianglesIcon} width={17} height={21}/></span>
    )
}

export default Triangles;