import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Resume from "./pages/resume/resume";
import "./index.css";
import NewPortfolio from "./pages/new-portfolio/new-portfolio";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Resume />} />
            <Route path="/portfolio" element={<NewPortfolio />} />
        </Routes>
    </BrowserRouter>
);
