import Image from "next/image"
import styles from "./header.module.css"
import utilStyles from "../../styles/utils.module.css";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.imageContainer}>
                <Image priority src="/images/profile.jpg" className={styles.profileImage} height={196} width={196} alt="Patrick Radulian"/>
            </div>

            <div className={styles.name}>
                <span className={`${utilStyles.colorSecondary} ${utilStyles.underline}`}>cv</span>
                <span className={utilStyles.underline}>patrick</span>
                <span className={`${utilStyles.colorSecondary} ${utilStyles.underline}`}>alexander</span>
                <span className={utilStyles.underline}>radulian</span>
            </div>

            <div className={styles.headerEntries}>
                <div className={styles.headerEntry}>
                    <Image src="/images/person.svg" width={24} height={24} alt="Person"/>
                    <span className={styles.headerEntryText}>patrick-radulian.com</span>
                </div>

                <div className={styles.headerEntry}>
                    <Image src="/images/phone.svg" width={24} height={24} alt="Phone"/>
                    <span className={styles.headerEntryText}>+43 699 170 51 561</span>
                </div>

                <div className={styles.headerEntry}>
                    <Image src="/images/envelope.svg" width={24} height={24} alt="Envelope"/>
                    <span className={styles.headerEntryText}>patrick.radulian@gmail.com</span>
                </div>
            </div>

            <div className={styles.headerEntries}>
                <div className={styles.headerEntry}>
                    <Image src="/images/xing.svg" width={24} height={24} alt="Xing Logo"/>
                    <span className={styles.headerEntryText}>patrick radulian</span>
                </div>

                <div className={styles.headerEntry}>
                    <Image src="/images/location.svg" width={24} height={24} alt="Map Location Pin"/>
                    <span className={styles.headerEntryText}>vienna</span>
                </div>

                <div className={styles.headerEntry}>
                    <Image src="/images/linkedin.svg" width={24} height={24} alt="LinkedIn Logo"/>
                    <span className={styles.headerEntryText}>in/patrickradulian</span>
                </div>
            </div>
        </header>
    )
}