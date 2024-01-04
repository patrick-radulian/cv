import ReactDOM from "react-dom/client";
import { Routes, Route, HashRouter } from "react-router-dom";
import Grid from "components/grid/grid";
import Resume from "./pages/resume/resume";
import Portfolio from "./pages/portfolio/portfolio";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<Grid />}>
                <Route path="/" element={<Resume />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Route>
        </Routes>
    </HashRouter>
);
