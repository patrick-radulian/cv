import React from "react";
import "./tools.css";
import Photoshop_BW from "src/images/icons/Photoshop_BW.svg";
import Photoshop_Color from "src/images/icons/Photoshop_Color.svg";
import Illustrator_BW from "src/images/icons/Illustrator_BW.svg";
import Illustrator_Color from "src/images/icons/Illustrator_Color.svg";
import Unreal_BW from "src/images/icons/UE_BW.svg";
import Unreal_Color from "src/images/icons/UE_Color.svg";
import Figma_BW from "src/images/icons/Figma_BW.svg";
import Figma_Color from "src/images/icons/Figma_Color.svg";
import Affinity_BW from "src/images/icons/Affinity_BW.svg";
import Affinity_Color from "src/images/icons/Affinity_Color.svg";
import ProtoIO_BW from "src/images/icons/ProtoIO_BW.svg";
import ProtoIO_Color from "src/images/icons/ProtoIO_Color.svg";
import Box from "components/box/box";
import IconBox from "components/icon-box/icon-box";

const Tools: React.FC = () => {
    const tools = [
        {
            src: Figma_BW,
            src2: Figma_Color,
            to: "https://www.figma.com/",
            target: "_blank",
            label: "Figma",
        },
        {
            src: ProtoIO_BW,
            src2: ProtoIO_Color,
            to: "https://proto.io/",
            target: "_blank",
            label: "Proto.io",
        },
        {
            src: Photoshop_BW,
            src2: Photoshop_Color,
            to: "https://www.adobe.com/products/photoshop.html",
            target: "_blank",
            label: "Photoshop",
        },
        {
            src: Illustrator_BW,
            src2: Illustrator_Color,
            to: "https://www.adobe.com/products/illustrator.html",
            target: "_blank",
            label: "Illustrator",
        },
        {
            src: Affinity_BW,
            src2: Affinity_Color,
            to: "https://affinity.serif.com/",
            target: "_blank",
            label: "Affinity",
        },
        {
            src: Unreal_BW,
            src2: Unreal_Color,
            to: "https://www.unrealengine.com/",
            target: "_blank",
            label: "Unreal",
        },
    ];

    return (
        <Box className="tools" order={10}>
            <div className="tools-grid">
                {tools.map((tool) => (
                    <IconBox
                        key={tool.src}
                        src_front={tool.src}
                        src_back={tool.src2}
                        to={tool.to}
                        label={tool.label}
                        isLink
                    />
                ))}
            </div>
        </Box>
    );
};

export default Tools;
