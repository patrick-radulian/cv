import React, { PropsWithChildren } from "react";
import type * as CSS from "csstype";
import "./box.css";

type BoxProps = PropsWithChildren & {
    className?: string;
    order?: CSS.Properties["order"];
    flex?: CSS.Properties["flex"];
};

const Box: React.FC<BoxProps> = (props: BoxProps) => {
    const style: CSS.Properties = {};
    const className = props.className ? `box ${props.className}` : "box";

    if (props.order) {
        style.order = props.order;
    }

    if (props.flex) {
        style.flex = props.flex;
    }

    return (
        <div className={className} style={style}>
            <div className="box-border-container">
                <div className="box-content-container">{props.children}</div>
            </div>
        </div>
    );
};

export default Box;
