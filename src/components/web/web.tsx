import React from "react";
import styles from "./web.module.css";
import HTML from "src/images/icons/HTML.svg";
import CSS from "src/images/icons/CSS.svg";
import REACT from "src/images/icons/React.svg";
import TS from "src/images/icons/TS.svg";
import ImageLink from "components/image-link/image-link";

const Web: React.FC = () => {
    return (
        <div className={styles["web-skills"]}>
            <ImageLink src={HTML} href="https://developer.mozilla.org/en-US/docs/Web/HTML" label="HTML" />
            <ImageLink src={CSS} href="https://developer.mozilla.org/en-US/docs/Web/CSS" label="CSS" />
            <ImageLink src={REACT} href="https://react.dev/" label="React" />
            <ImageLink src={TS} href="https://www.typescriptlang.org/" label="TypeScript" />
        </div>
    );
};

export default Web;
