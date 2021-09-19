import Head from 'next/head'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'

interface IAllPostsData {
    date: string
    title: string
    id: string
}

interface IHome {
    allPostsData: Array<IAllPostsData>
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Patrick Radulian</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Patrick Radulian's CV"/>
                <meta name="og:title" content="Patrick Radulian" />
            </Head>

            <Header/>

            <Main/>
        </div>
    )
}