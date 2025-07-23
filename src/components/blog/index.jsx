import styles from "../../pages/home/home.module.css";

import moment from "moment";

import content from "../../../content.json";

export function BlogComponent() {

    return (
        <section id="blog">
            <h2>Blog</h2>
            <div id="blogItems" className={styles["items"]}>
                {content.blog.map((blog, index) => {
                    if (blog.hide) return null;
                    return (
                        <div key={index} className={styles["item"]}>
                            <a href={`/blog/${blog.id}/`}>
                                <img src={blog.image} />
                            </a>
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
