import React, { PropsWithChildren } from "react";
import { Link, To } from "react-router-dom";
import "./icon-box.css";

type IconBoxBaseProps = PropsWithChildren & {
    className?: string;
    src_front: string;
    src_back?: string;
    alt?: string;
    label?: string;
};

type WithLink = {
    isLink: true;
    to: To;
};

type WithoutLink = {
    isLink?: false;
    to?: never;
};

type IconBoxProps = IconBoxBaseProps & (WithLink | WithoutLink);

const IconBox: React.FC<IconBoxProps> = (props: IconBoxProps) => {
    let className = "icon-box";

    if (props.className) {
        className += ` ${props.className}`;
    }

    if (props.src_back) {
        className += " has-two-icons";
    }

    return (
        <React.Fragment>
            {props.isLink ? (
                <Link className={className} to={props.to} target="_blank">
                    {props.src_back && (
                        <img className="icon-back" src={props.src_back} alt={props.alt ?? props.label} loading="lazy" />
                    )}

                    <img className="icon" src={props.src_front} alt={props.alt ?? props.label} loading="lazy" />

                    {props.label && <span className="icon-label" dangerouslySetInnerHTML={{ __html: props.label }} />}
                </Link>
            ) : (
                <div className="icon-box">
                    <img className="icon" src={props.src_front} alt={props.alt ?? props.label} loading="lazy" />
                    {props.label && <span className="icon-label" dangerouslySetInnerHTML={{ __html: props.label }} />}
                </div>
            )}
        </React.Fragment>
    );
};

export default IconBox;
