import React, { PropsWithChildren } from "react";
import CSS from "csstype";
import "./box-content.css";

type BoxContentProps = {
    children?: React.ReactNode;
    padding?: CSS.Properties["padding"];
};

const BoxContent: React.FC<PropsWithChildren<BoxContentProps>> = (props: BoxContentProps) => {
    return (
        <div className="box-content" style={props.padding ? { padding: props.padding } : {}}>
            {props.children}
        </div>
    );
};

export default BoxContent;
