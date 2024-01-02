import React from "react";
import styles from "./tools.module.css";
import ADOBECS from "src/images/skills/AdobeCS.svg";
import UNREAL from "src/images/skills/UE.svg";
import FIGMA from "src/images/skills/Figma.svg";
import AFFINITY from "src/images/skills/affinity.svg";
import GODOT from "src/images/skills/Godot.svg";
import PROTOIO from "src/images/skills/ProtoIO.svg";

const Tools: React.FC = () => {
    return (
        <div className={styles.tools}>
            <a href="https://www.figma.com/" className={styles.tool} target="_blank">
                <img src={FIGMA} alt="" loading="lazy" />
                <span className={styles.label}>Figma</span>
            </a>
            <a href="https://proto.io/" className={styles.tool} target="_blank">
                <img src={PROTOIO} alt="" loading="lazy" />
                <span className={styles.label}>Proto.io</span>
            </a>
            <a href="https://www.adobe.com/creativecloud.html" className={styles.tool} target="_blank">
                <img src={ADOBECS} alt="" loading="lazy" />
                <span className={styles.label}>AdobeCS</span>
            </a>
            <a href="https://affinity.serif.com/" className={styles.tool} target="_blank">
                <img src={AFFINITY} alt="" loading="lazy" />
                <span className={styles.label}>Affinity</span>
            </a>
            <a href="https://godotengine.org/" className={styles.tool} target="_blank">
                <img src={GODOT} alt="" loading="lazy" />
                <span className={styles.label}>Godot</span>
            </a>
            <a href="https://www.unrealengine.com/" className={styles.tool} target="_blank">
                <img src={UNREAL} alt="" loading="lazy" />
            </a>
        </div>
    );
};

export default Tools;
