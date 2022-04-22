import React from "react"
import styles from "./button.module.css"

type ButtonProps = {
    label: string
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.label}</button>
    )
}

export default Button;