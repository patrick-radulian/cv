import ReactDOM from "react-dom/client";
import Root from "./pages/root/root";
import Resume from "./pages/resume/resume";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Root>
        <Resume />
    </Root>
);
