import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styles.css";

import { HomePage } from "./pages/home";
import { ProjectsPage } from "./pages/projects";
import { BlogPage } from "./pages/blog";
import { BlogItemPage } from "./pages/blog/item";
import { NotFoundPage } from "./pages/not-found";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<HomePage />} />

            <Route path="projects">
                <Route index element={<ProjectsPage />} />
            </Route>
            <Route path="blog">
                <Route index element={<BlogPage />} />
                <Route path=":id" element={<BlogItemPage />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} status={404} />
        </Routes>
    </BrowserRouter>
);

console.log(
    "%cHello!",
    "color:red;font-family:system-ui;font-size:3rem;-webkit-text-stroke: 1px black;font-weight:bold"
);
console.log(
    "%cYou can find the source code here: \nhttps://github.com/jackwellerreal/website",
    "color:white;font-family:system-ui;font-size:1rem;font-weight:bold"
);
console.log(
    "%cIt will be easier to read than the compiled react code.",
    "color:white;font-family:system-ui;font-size:1rem;font-weight:bold"
);
