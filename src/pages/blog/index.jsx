import styles from "../home/home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import content from "../../../content.json";

export function Blog() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
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
            </main>
            <Footer />
        </div>
    );
}
