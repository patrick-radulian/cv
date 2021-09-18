import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Header from './header/header'

interface ILayout {
    children: React.ReactNode
    home?: boolean
}

export default function Layout({children, home}: ILayout) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV"/>
                <meta name="og:title" content="Patrick Radulian" />
            </Head>

            <Header/>

            <main>{children}</main>
        </div>
    )
}