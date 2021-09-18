import Head from 'next/head'
import Header from '../components/header/header'
import Main from '../components/main/main'
import utilStyles from '../styles/utils.module.css'

interface IAllPostsData {
    date: string
    title: string
    id: string
}

interface IHome {
    allPostsData: Array<IAllPostsData>
}

export default function Home({ allPostsData }: IHome) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV"/>
                <meta name="og:title" content="Patrick Radulian" />
            </Head>

            <Header/>

            <Main/>
        </div>
    )
}