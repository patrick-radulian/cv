import React from "react";
import styles from "./resume-section.module.css";

type ResumeSectionProps = {
    icon: string;
    label: string;
    children: React.ReactElement | Array<React.ReactElement>;
    className?: string;
};

const ResumeSection: React.FC<ResumeSectionProps> = ({ icon, label, children, className }) => {
    return (
        <section className={className}>
            <div className={styles["section-header"]}>
                <hr className={styles["section-separator"]} />

                <div className={styles["section-center"]}>
                    <img src={icon} className={styles["section-icon"]} alt="" />
                    <h3 className={styles["section-title"]}>{label}</h3>
                </div>

                <hr className={styles["section-separator"]} />
            </div>

            {children}
        </section>
    );
};

export default ResumeSection;
