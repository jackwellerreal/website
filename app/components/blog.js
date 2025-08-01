import moment from "moment";
import Link from "next/link";

import styles from "../styles/home.module.css";
import content from "../../content.json";

export function BlogComponent() {
    return (
        <section id="blog" className={styles["section"]}>
            <Link
                href="/blog"
                style={{
                    cursor: "pointer",
                    textDecoration: "none",
                    color: "inherit",
                }}
            >
                <h2>Blog</h2>
            </Link>
            <div id="blogItems" className={styles["items"]}>
                {content.blog.map((blog, index) => {
                    if (blog.hide) return null;
                    return (
                        <div key={index} className={styles["item"]}>
                            <Link href={`/blog/${blog.id}/`}>
                                <img src={blog.image} alt={blog.title} />
                            </Link>
                            <h3>{blog.title}</h3>
                            <p>
                                <span>
                                    {moment(blog.date, "DD/MM/YYYY").fromNow()}
                                </span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
