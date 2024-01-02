import React from "react";
import styles from "./image-link.module.css";

type ImageLinkProps = {
    label?: string;
    src: string;
    href?: string;
};

const ImageLink: React.FC<ImageLinkProps> = (props: ImageLinkProps) => {
    return (
        <a href={props.href} target="_blank" className={styles.container}>
            <img className={styles.img} src={props.src} alt={props.label} />
            {props.label && <div className={styles.label}>{props.label}</div>}
        </a>
    );
};

export default ImageLink;
