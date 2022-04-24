import React from "react"
import CVSection from "../cv-section/cv-section"
import AboutIcon from "../../public/images/About-Icon.svg"
import Triangles from "../triangles/triangles"

const About: React.FC<{}> = () => {
    return (
        <>
            <CVSection icon={AboutIcon} label="About">
                <p>
                    <Triangles/> As a self-taught front-end engineer, user
                    interface designer, and user experience designer - with a passion for code, art, games, vr,
                    and more - I delight in envisioning, designing, and producing experiences which go beyond
                    solving people's problems. I love to create moments of joy that make people feel successful
                    and productive.
                </p>

                <p>
                    This is one of the reasons why I found my calling in the combination of front-end engineering
                    and design thinking. These two disciplines bring together the fundamental building blocks of
                    humancentered product design and development.
                </p>
            </CVSection>
        </>
    )
}

export default About;