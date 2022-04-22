import React from "react"
import Button from "../button/button";
import Signature from "../signature/signature";
import styles from "./menu.module.css"


const Menu: React.FC<{}> = () => {
    const onClickPortfolio = React.useCallback(e => {
        console.log(e);
    }, []);

    const onClickCV = React.useCallback(e => {
        console.log(e);
    }, []);

    return (
        <div className={styles.menu}>
            <Signature/>

            <div className={styles.buttons}>
                <Button label="Portfolio" onClick={onClickPortfolio}/>
                <Button label="CV" onClick={onClickCV}/>
            </div>
        </div>
    )
}

export default Menu;