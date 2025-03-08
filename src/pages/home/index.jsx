import styles from "./home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { ExperienceComponent } from "../../components/experience";
import { SkillsComponent } from "../../components/skills";
import { BlogComponent } from "../../components/blog";
import { ProjectsComponent } from "../../components/projects";

import content from "../../../content.json";

export function HomePage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <section id="about">
                    {content.description && <p>{content.description}</p>}
                </section>
                {content.skills.length > 0 && <SkillsComponent />}
                {content.experience.length > 0 && <ExperienceComponent />}
                {content.blog.length > 0 && <BlogComponent />}
                {content.projects.length > 0 && <ProjectsComponent />}
            </main>
            <Footer />
        </div>
    );
}
