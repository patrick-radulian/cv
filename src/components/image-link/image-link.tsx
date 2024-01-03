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
            <div className={styles["image-mask"]} style={{['--mask-src' as string]: `url(${props.src})`}}>
                <img src={props.src} alt={props.label} loading="lazy" />
            </div>
            {props.label && <span className={styles.label}>{props.label}</span>}
        </a>
    );
};

export default ImageLink;
