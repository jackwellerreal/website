import styles from "../../pages/home/home.module.css";

import content from "../../../content.json";

export function BlogComponent() {
    return (
        <section id="blog">
            <h2>Blog</h2>
            <div id="blogItems" className={styles["items"]}>
                {content.blog.map((blog, index) => (
                    <div key={index} className={styles["item"]}>
                        <a href={`/blog/${blog.id}/`}>
                            <img src={`/blog/${blog.id}/assets/title.jpg`} />
                        </a>
                        <h3>{blog.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
