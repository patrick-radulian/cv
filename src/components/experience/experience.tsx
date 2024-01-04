import React from "react";
import _ from "lodash";
import styles from "./experience.module.css";
import Box from "components/box/box";
import BoxBackground from "components/box-background/box-background";
import BoxContent from "components/box-content/box-content";
import Bulb from "src/images/Bulb.png";

const Experience: React.FC = () => {
    const roles: Array<Array<string>> = [
        ["Web Developer,", "Graphic Designer"],
        ["Front-end,", "Engineer"],
        ["Front-end Engineer,", "UI/UX Designer"],
        ["Sr. Front-end,", "Engineer"],
        ["Sr. Software,", "Engineer"],
    ];

    const durations: Array<string> = ["1yr", "6m", "7yr", "3m", "1yr"];

    return (
        <Box className={styles.experience} noBg>
            <div className={styles["experience-background"]}>
                <BoxBackground />
                <BoxContent>
                    <div className={styles["experience-container"]}>
                    <h1 className={styles.title}>Work Experience</h1>
            <div className={styles.timeline}>
                {roles.map((segment, i) => (
                    <div className={styles.role} style={{ ["--n" as string]: i + 1 }}>
                        {segment.map((role) => (
                            <React.Fragment>
                                {role}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                ))}

                {_.range(1, 7).map((i) => (
                    <div className={styles["timeline-segment"]} style={{ ["--n" as string]: i }} />
                ))}
                {durations.map((duration, i) => (
                    <div className={styles.circle} style={{ ["--n" as string]: i + 1 }}>
                        <div className={styles["circle-inner"]}>{duration}</div>
                    </div>
                ))}
                <div className={styles.arrow} />
            </div>
                    </div>
                </BoxContent>
            </div>

            <img src={Bulb} className={styles["experience-image"]} alt="Bag" />
        </Box>
    );
};

export default Experience;
