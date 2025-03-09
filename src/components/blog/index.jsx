import styles from "../../pages/home/home.module.css";

import moment from "moment";

import content from "../../../content.json";

export function BlogComponent() {
    function calculateReadTime(text) {
        const wordCount = text.split(/\s+/).length;
        const wordsPerMinute = 300;
        return Math.ceil(wordCount / wordsPerMinute);
    }

    return (
        <section id="blog">
            <h2>Blog</h2>
            <div id="blogItems" className={styles["items"]}>
                {content.blog.map((blog, index) => (
                    <div key={index} className={styles["item"]}>
                        <a href={`/blog/${blog.id}/`}>
                            <img src={blog.image} />
                        </a>
                        <h3>{blog.title}</h3>
                        <p>
                            <span>
                                {moment(blog.date, "DD/MM/YYYY").fromNow()}
                            </span>
                            <span>{}</span>
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
