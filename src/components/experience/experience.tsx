import React from "react";
import _ from "lodash";
import "./experience.css";
import Box from "components/box/box";

const Experience: React.FC = () => {
    const roles: Array<Array<string>> = [
        ["Web De&shy;ve&shy;lo&shy;per, Gra&shy;phic De&shy;sig&shy;ner"],
        ["Front&shy;end En&shy;gi&shy;neer"],
        ["Front&shy;end En&shy;gi&shy;neer, UI/UX De&shy;sig&shy;ner"],
        ["Sr. Front&shy;end En&shy;gi&shy;neer"],
        ["Sr. Soft&shy;ware En&shy;gi&shy;neer"],
    ];

    const durations: Array<string> = ["1yr", "6m", "7yr", "3m", "1yr"];

    return (
        <Box order={10}>
            {/* <h1 className="experience-title">Work Experience</h1> */}

            <div className="experience-timeline">
                {roles.map((segment, i) => (
                    <div className="experience-role" key={i} style={{ ["--n" as string]: i + 1 }}>
                        {segment.map((role) => (
                            <span key={role} dangerouslySetInnerHTML={{ __html: role }} />
                        ))}
                    </div>
                ))}

                {_.range(0, 6).map((i) => (
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

            {/* <img src={Bulb} className="experience-image" alt="Bag" /> */}
        </Box>
    );
};

export default Experience;
