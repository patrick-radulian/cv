import Image from "next/image"
import styles from "./header.module.css"
import utilStyles from "../../styles/utils.module.css";
import HeaderEntry from "../headerEntry/headerEntry";

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
                <HeaderEntry imageFileName="person.svg" imageAltText="Person" text="patrick-radulian.com" link="https://patrick-radulian.com"/>
                <HeaderEntry imageFileName="phone.svg" imageAltText="Phone" text="+43 699 170 51 561" link="tel:+43-699-170-51-561"/>
                <HeaderEntry imageFileName="envelope.svg" imageAltText="Envelope" text="patrick.radulian@gmail.com" link="mailto:patrick.radulian@gmail.com"/>
            </div>

            <div className={styles.headerEntries}>
                <HeaderEntry imageFileName="xing.svg" imageAltText="Xing Logo" text="patrick radulian" link="https://www.xing.com/profile/Patrick_Radulian/cv"/>
                <HeaderEntry imageFileName="location.svg" imageAltText="Map Location Pin" text="vienna" link="https://goo.gl/maps/ArAvLCbSomd8XuNM9"/>
                <HeaderEntry imageFileName="linkedin.svg" imageAltText="LinkedIn Logo" text="in/patrickradulian" link="https://www.linkedin.com/in/patrickradulian/"/>
            </div>
        </header>
    )
}