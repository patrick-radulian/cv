import Main from "components/main/main";
import Head from "next/head";
import React from "react";
import Arrow from "../components/arrow/arrow";
import Background from "../components/background/background";
import Clouds from "../components/clouds/clouds";

import StartScreen from "../components/start-screen/start-screen";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Patrick Radulian</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV and Portfolio" />
                <meta name="og:title" content="Patrick Radulian" />
            </Head>

            <Background />

            <StartScreen />

            <Clouds />

            <Arrow />

            <Main />
        </div>
    );
}
