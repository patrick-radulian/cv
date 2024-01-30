import React from "react";
import { Link, To } from "react-router-dom";
import "./image-link.css";

type ImageLinkProps = {
    label?: string;
    alt?: string;
    imgSrc: string;
    to: To;
    target?: React.HTMLAttributeAnchorTarget;
    className?: string;
};

const ImageLink: React.FC<ImageLinkProps> = (props: ImageLinkProps) => {
    const className = `image-link ${props.className ?? ""} ${!props.label ? "no-label" : ""}`;

    return (
        <Link to={props.to} target={props.target} className={className} >
            <img className="image" src={props.imgSrc} alt={props.alt ?? props.label} loading="lazy" />
            {props.label && <span className="image-link-label" dangerouslySetInnerHTML={{ __html: props.label }} />}
        </Link>
    );
};

export default ImageLink;
