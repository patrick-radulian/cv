import ReactDOM from 'react-dom/client'
import Portfolio from './pages/portfolio/portfolio.tsx'
import Root from './pages/root/root.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Root>
    <Portfolio />
</Root>,
)