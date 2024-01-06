import React from "react";
import { Link, To } from "react-router-dom";
import "./image-link.css";

type ImageLinkProps = {
    label?: string;
    alt?: string;
    src: string;
    to: To;
    target?: React.HTMLAttributeAnchorTarget;
    isRouterLink?: boolean;
    className?: string;
};

const ImageLink: React.FC<ImageLinkProps> = (props: ImageLinkProps) => {
    return (
        <Link to={props.to} target={props.target} className={`${props.className} image-link`}>
            <div className="masked-image" style={{ ["--mask-src" as string]: `url(${props.src}#mask)` }}/>
            <img className="image" src={props.src} alt={props.alt ?? props.label} loading="lazy" />
            {props.label && <span className="image-link-label">{props.label}</span>}
        </Link>
    );
};

export default ImageLink;
