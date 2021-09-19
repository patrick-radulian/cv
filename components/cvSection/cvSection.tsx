import { ReactElement } from "react"
import CVSectionHeader from "../cvSectionHeader/cvSectionHeader"
import styles from "./cvSection.module.css"

interface IProps {
    color: string
    text: string
    children: ReactElement
}

export default function MainEntry(props: IProps) {
    return (
        <section>

            <CVSectionHeader color={props.color} text={props.text}/>
        </section>
    )
}