import React from "react";
import _ from "lodash";
import "./experience.css";
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
        <Box className="experience" noBg>
            <div className="experience-background">
                <BoxBackground />
                <BoxContent>
                    <div className="experience-container">
                        <h1 className="title">Work Experience</h1>
                        <div className="timeline">
                            {roles.map((segment, i) => (
                                <div className="role" key={i} style={{ ["--n" as string]: i + 1 }}>
                                    {segment.map((role) => (
                                        <React.Fragment key={role}>
                                            {role}
                                            <br />
                                        </React.Fragment>
                                    ))}
                                </div>
                            ))}

                            {_.range(1, 7).map((i) => (
                                <div className="timeline-segment" key={i} style={{ ["--n" as string]: i }} />
                            ))}
                            {durations.map((duration, i) => (
                                <div className="circle" key={i} style={{ ["--n" as string]: i + 1 }}>
                                    <div className="circle-inner">{duration}</div>
                                </div>
                            ))}
                            <div className="arrow" />
                        </div>
                    </div>
                </BoxContent>
            </div>

            <img src={Bulb} className="experience-image" alt="Bag" />
        </Box>
    );
};

export default Experience;
