import styles from "./item.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

export function BlogItem() {
    let params = useParams();
    const blogId = params.id;

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState("");
    const [readTime, setReadTime] = useState(0);

    function calculateReadTime(text) {
        const wordCount = text.split(/\s+/).length;
        const wordsPerMinute = 300;
        return Math.ceil(wordCount / wordsPerMinute);
    }

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const titleData = await fetch(
                    `/blog/${blogId}/title.json`
                ).then((res) => res.json());
                const contentData = await fetch(
                    `/blog/${blogId}/content.md`
                ).then((res) => res.text());

                setTitle(titleData);
                setContent(contentData);
                setReadTime(calculateReadTime(contentData));
            } catch (error) {
                console.error("Error loading blog data:", error);
            }
        }

        fetchBlogData();
    }, [blogId]);

    if (!title || !content) {
        return (
            <div className={styles["container"]}>
                <main>
                    <div className={styles["content"]}>
                        <p>Loading...</p>
                    </div>
                </main>
            </div>
        );
    }

    return (
        <div className={styles["container"]}>
            <Header />
            {!title || !content ? (
                <main>
                    <div className={styles["content"]}>
                        <p>Loading...</p>
                    </div>
                </main>
            ) : (
                <main>
                    <div className={styles["title"]}>
                        <img src={title.image} alt="Blog title" />
                        <h1>{title.title}</h1>
                        <p>{title.description}</p>
                        <p className={styles["subtitle"]}>
                            Estimated read time: {readTime} minute
                            {readTime > 1 ? "s" : ""}
                        </p>
                    </div>
                    <hr />
                    <div className={styles["content"]}>
                        <Markdown
                            children={content}
                            components={{
                                a({ node, ...props }) {
                                    return (
                                        <a
                                            {...props}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    );
                                },
                            }}
                        />
                        <p>
                            <a href="/blog">Back to blog</a>
                        </p>
                    </div>
                </main>
            )}
            <Footer />
        </div>
    );
}
