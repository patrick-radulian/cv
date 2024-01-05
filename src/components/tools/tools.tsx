import React from "react";
import "./tools.css";
import ADOBECS from "src/images/icons/AdobeCS.svg";
import UNREAL from "src/images/icons/UE.svg";
import FIGMA from "src/images/icons/Figma.svg";
import AFFINITY from "src/images/icons/Affinity.svg";
import PROTOIO from "src/images/icons/ProtoIO.svg";
import ImageLink from "components/image-link/image-link";
import Box from "components/box/box";

const Tools: React.FC = () => {
    const tools = [
        {
            src: FIGMA,
            to: "https://www.figma.com/",
            target: "_blank",
            label: "Figma",
        },
        {
            src: PROTOIO,
            to: "https://proto.io/",
            target: "_blank",
            label: "Proto.io",
        },
        {
            src: ADOBECS,
            to: "https://www.adobe.com/creativecloud.html",
            target: "_blank",
            label: "AdobeCS",
        },
        {
            src: AFFINITY,
            to: "https://affinity.serif.com/",
            target: "_blank",
            label: "Affinity",
        },
        {
            src: UNREAL,
            to: "https://www.unrealengine.com/",
            target: "_blank",
            label: "Unreal",
        },
    ];

    return (
        <Box className="tools">
            <div className="tools-grid">
                {tools.map((tool) => (
                    <ImageLink
                        className="tools-image-link"
                        key={tool.src}
                        src={tool.src}
                        to={tool.to}
                        target={tool.target}
                        label={tool.label}
                    />
                ))}
            </div>
        </Box>
    );
};

export default Tools;
