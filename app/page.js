import styles from "./styles/home.module.css";
import { Header, Footer } from "./components/layout";

import { ExperienceComponent } from "./components/experience";
import { SkillsComponent } from "./components/skills";
import { BlogComponent } from "./components/blog";
import { ProjectsComponent } from "./components/projects";

import content from "../content.json";

export default function HomePage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["main"]}>
                <section id="about" className={styles["section"]}>
                    {content.description && <p>{content.description}</p>}
                </section>
                {content.skills?.length > 0 && <SkillsComponent />}
                {content.experience?.length > 0 && <ExperienceComponent />}
                {content.blog?.length > 0 && <BlogComponent />}
                {content.projects?.length > 0 && <ProjectsComponent />}
            </main>
            <Footer />
        </div>
    );
}
