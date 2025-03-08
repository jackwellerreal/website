import styles from "../home/home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { ProjectsComponent } from "../../components/projects";

export function ProjectsPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <ProjectsComponent />
            </main>
            <Footer />
        </div>
    );
}
