import "../styles/global.css"
import { AppProps } from "next/app"
import Background from "../components/background/background"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Background>
            <Component {...pageProps}/>
        </Background>
    )
}