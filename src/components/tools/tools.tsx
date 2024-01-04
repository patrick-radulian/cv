import React from "react";
import "./tools.css";
import ADOBECS from "src/images/icons/AdobeCS.svg";
import UNREAL from "src/images/icons/UE.svg";
import FIGMA from "src/images/icons/Figma.svg";
import AFFINITY from "src/images/icons/Affinity.svg";
import PROTOIO from "src/images/icons/ProtoIO.svg";
import ImageLink from "components/image-link/image-link";
import Box from "components/box/box";
import BoxContent from "components/box-content/box-content";

const Tools: React.FC = () => {
    return (
        <Box className="tools">
            <BoxContent>
                <div className="tools-list">
                    <ImageLink src={FIGMA} to="https://www.figma.com/" target="_blank" label="Figma" />
                    <ImageLink src={PROTOIO} to="https://proto.io/" target="_blank" label="Proto.io" />
                    <ImageLink
                        src={ADOBECS}
                        to="https://www.adobe.com/creativecloud.html"
                        target="_blank"
                        label="AdobeCS"
                    />
                    <ImageLink src={AFFINITY} to="https://affinity.serif.com/" target="_blank" label="Affinity" />
                    <ImageLink src={UNREAL} to="https://www.unrealengine.com/" target="_blank" label="Unreal Engine" />
                </div>
            </BoxContent>
        </Box>
    );
};

export default Tools;
