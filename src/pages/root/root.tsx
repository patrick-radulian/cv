import styles from "./root.module.css";
import Clouds from "components/clouds/clouds";
import Signature from "components/signature/signature";
import React, { PropsWithChildren } from "react";

const Root: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <React.Fragment>
            <Signature />
            <Clouds />

            <main className={styles.main}>
                {children}
            </main>
        </React.Fragment>
    );
};

export default Root;
