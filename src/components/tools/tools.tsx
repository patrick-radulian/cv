import React from "react";
import styles from "./tools.module.css";
import ADOBECS from "src/images/icons/AdobeCS.svg";
import UNREAL from "src/images/icons/UE.svg";
import FIGMA from "src/images/icons/Figma.svg";
import AFFINITY from "src/images/icons/Affinity.svg";
import PROTOIO from "src/images/icons/ProtoIO.svg";
import ImageLink from "components/image-link/image-link";

const Tools: React.FC = () => {
    return (
        <div className={styles.tools}>
            <ImageLink src={FIGMA} href="https://www.figma.com/" label="Figma" />
            <ImageLink src={PROTOIO} href="https://proto.io/" label="Proto.io" />
            <ImageLink src={ADOBECS} href="https://www.adobe.com/creativecloud.html" label="AdobeCS" />
            <ImageLink src={AFFINITY} href="https://affinity.serif.com/" label="Affinity" />
            <ImageLink src={UNREAL} href="https://www.unrealengine.com/" label="Unreal Engine" />
        </div>
    );
};

export default Tools;
