import Main from 'components/main/main'
import Head from 'next/head'
import React from 'react'
import Arrow from '../components/arrow/arrow'
import Background from '../components/background/background'
import Clouds from '../components/clouds/clouds'

import StartScreen from '../components/start-screen/start-screen'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Patrick Radulian</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV and Portfolio"/>
                <meta name="og:title" content="Patrick Radulian"/>

                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,300;0,400;0,700;1,400;1,700&display=swap" rel="stylesheet"/>
            </Head>

            <Background/>

            <StartScreen/>

            <Clouds/>

            <Arrow/>

            <Main/>
        </div>
    )
}