import React from "react";
import styles from "./image-link.module.css";

type ImageLinkProps = {
    label?: string;
    src: React.ReactNode;
};

const ImageLink: React.FC<ImageLinkProps> = (props: ImageLinkProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={props.src} alt={props.label} />
            {props.label && <div className={styles.label}>{props.label}</div>}
        </div>
    );
};

export default ImageLink;
