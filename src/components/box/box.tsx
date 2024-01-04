import React, { PropsWithChildren } from "react";
import BoxBackground from "components/box-background/box-background";

type BoxProps = {
    className?: string;
    children?: React.ReactNode;
    noBg?: boolean;
    style?: React.CSSProperties;
};

const Box: React.FC<PropsWithChildren<BoxProps>> = (props: BoxProps) => {
    return (
        <div className={`${props.className} box`} style={props.style}>
            {!props.noBg && <BoxBackground />}
            {props.children}
        </div>
    );
};

export default Box;
