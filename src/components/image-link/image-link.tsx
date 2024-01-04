import React from "react";
import { Link, To } from "react-router-dom";
import "./image-link.css";

type ImageLinkProps = {
    label?: string;
    src: string;
    to: To;
    target?: React.HTMLAttributeAnchorTarget;
    isRouterLink?: boolean;
};

const ImageLink: React.FC<ImageLinkProps> = (props: ImageLinkProps) => {
    return (
        <Link to={props.to} target={props.target} className="image-link">
            <div className="image-mask" style={{ ["--mask-src" as string]: `url(${props.src}#mask)` }}>
                <img src={props.src} alt={props.label} loading="lazy" />
            </div>
            {props.label && <span className="image-link-label">{props.label}</span>}
        </Link>
    );
};

export default ImageLink;
