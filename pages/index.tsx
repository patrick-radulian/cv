import Layout from '../components/layout'
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
        <Layout home>
            <section>
                This site is currently under construction.
            </section>
        </Layout>
    )
}