import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./styles.css";

import { Home } from "./pages/home";
import { Projects } from "./pages/projects";
import { Blog } from "./pages/blog";
//import { BlogItem } from "./pages/blog/item";
import { Contact } from "./pages/contact";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />

            <Route path="projects">
                <Route index element={<Projects />} />
            </Route>
            <Route path="blog">
                <Route index element={<Blog />} />
                {/*<Route path=":id" element={<BlogItem />} />*/}
            </Route>

            <Route path="contact" element={<Contact />} />

            <Route path="*" element={<div>404</div>} />
        </Routes>
    </BrowserRouter>
);
