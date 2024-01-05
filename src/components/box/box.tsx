import React, { PropsWithChildren } from "react";
import "./box.css";

type BoxProps = {
    className?: string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
};

const Box: React.FC<PropsWithChildren<BoxProps>> = (props: BoxProps) => {
    return (
        <div className={`${props.className} box`} style={props.style}>
            <div className="box-bg">
                <div className="box-bg-fill" />
            </div>
            <div className="box-content">{props.children}</div>
        </div>
    );
};

export default Box;
