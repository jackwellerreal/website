import styles from "../styles/home.module.css";
import { Header, Footer } from "../components/layout";

import { ProjectsComponent } from "../components/projects";

export default function ProjectsPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["main"]}>
                <ProjectsComponent />
            </main>
            <Footer />
        </div>
    );
}
