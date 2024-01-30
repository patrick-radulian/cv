import React from "react";
import "./about.css";
import Box from "components/box/box";

const About: React.FC = () => {
    return (
        <Box order={0}>
            <h1 className="about-title">About</h1>

            <p className="about-text">
                I am a UI/UX designer with an <em>extra&shy;ordinary tech&shy;nical founda&shy;tion</em>, coun&shy;ting
                over 12 years of front&shy;-end enginee&shy;ring experi&shy;ence, doing both{" "}
                <em>tech&shy;nical and design work</em> - 8 of them working on{" "}
                <em>enter&shy;prise level applica&shy;tions</em> with 3 years spent exlu&shy;sively on UI/UX design.
            </p>
            <p className="about-text">
                My defining traits are <em>strong visual intelli&shy;gence</em>, highly deve&shy;loped empathy, a very
                analy&shy;tical ap&shy;proach, <em>excel&shy;lent com&shy;muni&shy;cation skills</em>, and a special
                ability to com&shy;bine design and techno&shy;logy per&shy;spec&shy;tives.
            </p>
        </Box>
    );
};

export default About;
