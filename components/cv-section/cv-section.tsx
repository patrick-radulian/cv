import React from "react"
import Image from "next/image"
import styles from "./cv-section.module.css"

type CVSectionProps = {
    icon: any
    label: string
    children: React.ReactElement | Array<React.ReactElement>
    className?: string
}

const CVSection: React.FC<CVSectionProps> = ({icon, label, children, className}) => {
    return (
        <section className={className}>
            <div className={styles["section-header"]}>
                <hr className={styles["section-separator"]}/>

                <div className={styles["section-center"]}>
                    <Image src={icon} width={48} height={48}/>
                    <h3 className={styles["section-title"]}>{label}</h3>
                </div>

                <hr className={styles["section-separator"]}/>
            </div>

            {children}
        </section>
    )
}

export default CVSection;