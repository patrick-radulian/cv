import Image from "next/image"
import styles from "./header.module.css"
import utilStyles from "../../styles/utils.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <Image priority src="/images/profile.jpg" className={styles.profileImage} height={196} width={196} alt="Patrick Radulian"/>

            <div className={styles.name}>
                <span className={`${utilStyles.colorSecondary} ${utilStyles.underline}`}>cv</span>
                <span className={utilStyles.underline}>patrick</span>
                <span className={`${utilStyles.colorSecondary} ${utilStyles.underline}`}>alexander</span>
                <span className={utilStyles.underline}>radulian</span>
            </div>
        </header>
    )
}