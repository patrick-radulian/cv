import Head from 'next/head'
import React from 'react'
import Header from '../components/header/header'
import Main from '../components/main/main'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Patrick Radulian</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV"/>
                <meta name="og:title" content="Patrick Radulian" />

                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Serif+Display:wdth@62.5;100&display=swap" rel="stylesheet"></link>
            </Head>

            <Header/>

            <Main/>
        </div>
    )
}