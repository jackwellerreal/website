import styles from "./home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import content from "../../../content.json";

export function Home() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <section id="about">
                    {content.description && <p>{content.description}</p>}
                </section>
                {content.skills.length > 0 && (
                    <section id="skills">
                        <h2>Skills</h2>
                        <div id="skillItems" className={styles["items"]}>
                            {content.skills.map((skill, index) => (
                                <div key={index} className={styles["item"]}>
                                    <h3>{skill.title}</h3>
                                    <p>{skill.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                {content.experience.length > 0 && (
                    <section id="experience">
                        <h2>Experience</h2>
                        <div id="experienceItems" className={styles["items"]}>
                            {content.experience.map((experience, index) => (
                                <div key={index} className={styles["item"]}>
                                    <h3>{experience.title}</h3>
                                    <p>{experience.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                {content.blog.length > 0 && (
                    <section id="blog">
                        <h2>Blog</h2>
                        <div id="blogItems" className={styles["items"]}>
                            {content.blog.map((blog, index) => (
                                <div key={index} className={styles["item"]}>
                                    <a href={`/blog/${blog.id}/`}>
                                        <img
                                            src={`/blog/${blog.id}/assets/title.jpg`}
                                        />
                                    </a>
                                    <h3>{blog.title}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
                {content.projects.length > 0 && (
                    <section id="projects">
                        <h2>Projects</h2>
                        <div id="projectItems" className={styles["items"]}>
                            {content.projects.map((project, index) => (
                                <div key={index} className={styles["item"]}>
                                    <h3>
                                        {project.title}
                                        <a href={project.repo} target="_blank">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                                            </svg>
                                        </a>
                                    </h3>
                                    <p>{project.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}
