import React, { PropsWithChildren } from "react";
import "./container.css";

type ContainerProps = PropsWithChildren & {
    reverse?: boolean;
};

const Container: React.FC<ContainerProps> = (props: ContainerProps) => {
    let classNames = "container";

    if (props.reverse) {
        classNames += ` container-reverse`;
    }

    return <div className={classNames}>{props.children}</div>;
};

export default Container;
