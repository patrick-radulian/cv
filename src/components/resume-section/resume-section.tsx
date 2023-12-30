import React from "react";
import styles from "./resume-section.module.css";
import BACKICON from "../../images/Arrow-Left.svg";

type ResumeSectionProps = {
    icon: string;
    backIcon?: boolean;
    label: string;
    children: React.ReactElement | Array<React.ReactElement>;
    className?: string;
};

const ResumeSection: React.FC<ResumeSectionProps> = ({ icon, backIcon, label, children, className }) => {
    return (
        <section className={className}>
            <div className={styles["section-header"]}>
                {backIcon && (
                    <a href="/" style={{ marginRight: "0.5rem" }}>
                        <img src={BACKICON} alt="Back" width="30" />
                    </a>
                )}

                <hr className={styles["section-separator"]} />

                <div className={styles["section-center"]}>
                    <img src={icon} className={styles["section-icon"]} alt="" loading="lazy" />
                    <h3 className={styles["section-title"]}>{label}</h3>
                </div>

                <hr className={styles["section-separator"]} />
            </div>

            {children}
        </section>
    );
};

export default ResumeSection;
