import React from "react"
import styles from "./button.module.css"

type ButtonProps = {
    label: string
}

// const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
//     return (
//         <button className={styles.button} onClick={props.onClick}>{props.label}</button>
//     )
// }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
    return (
        <button ref={ref} className={styles.button} >{props.label}</button>
    )
});

export default Button;