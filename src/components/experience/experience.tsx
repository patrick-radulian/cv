import React from "react";
import _ from "lodash";
import "./experience.css";
import Box from "components/box/box";
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
        <Box className="experience">
            <h1 className="experience-title">Work Experience</h1>

            <div className="experience-timeline">
                {roles.map((segment, i) => (
                    <div className="experience-role" key={i} style={{ ["--n" as string]: i + 1 }}>
                        {segment.map((role) => (
                            <React.Fragment key={role}>
                                {role}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                ))}

                {_.range(1, 7).map((i) => (
                    <div className="experience-timeline-segment" key={i} style={{ ["--n" as string]: i }} />
                ))}
                {durations.map((duration, i) => (
                    <div className="experience-circle" key={i} style={{ ["--n" as string]: i + 1 }}>
                        <div className="experience-circle-inner">{duration}</div>
                    </div>
                ))}
                {durations.map((_, i) => (
                    <div className="experience-connector" key={i} style={{ ["--n" as string]: i + 1 }} />
                ))}
                <div className="experience-arrow" />
            </div>

            <img src={Bulb} className="experience-image" alt="Bag" />
        </Box>
    );
};

export default Experience;
