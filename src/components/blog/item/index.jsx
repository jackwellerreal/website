import { useParams } from "react-router";
import { useEffect, useState } from "react";

import styles from "../../../pages/blog/item/item.module.css";

import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import moment from "moment";

export function BlogItemComponent() {
    let params = useParams();
    const blogId = params.id;

    const [metadata, setMetadata] = useState(null);
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
                const metaData = await fetch(
                    `/blog/${blogId}/metadata.json`
                ).then((res) => res.json());
                const contentData = await fetch(
                    `/blog/${blogId}/content.md`
                ).then((res) => res.text());

                setMetadata(metaData);
                setContent(contentData);
                setReadTime(calculateReadTime(contentData));
            } catch (error) {
                console.error("Error loading blog data:", error);
            }
        }

        fetchBlogData();
    }, [blogId]);

    if (!metadata || !content) {
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
        <>
            {!metadata || !content ? (
                <div className={styles["content"]}>
                    <p>Loading...</p>
                </div>
            ) : (
                <>
                    <div className={styles["title"]}>
                        <img src={metadata.image} alt="Blog title" />
                        <h1>{metadata.title}</h1>
                        <p>{metadata.description}</p>
                        <p className={styles["subtitle"]}>
                            <span>
                                {moment(metadata.date, "DD/MM/YYYY").fromNow()}
                            </span>
                            <span>•</span>
                            <span>
                                Read time: {readTime} minute
                                {readTime > 1 ? "s" : ""}
                            </span>
                        </p>
                    </div>
                    <hr />
                    <div className={styles["content"]}>
                        <Markdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                a({ ...props }) {
                                    return (
                                        <a
                                            {...props}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        />
                                    );
                                },
                            }}
                        >
                            {content}
                        </Markdown>
                        <hr />
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <a href="/blog">Back to blog</a>
                            <a
                                href={`https://twitter.com/intent/tweet?text=${metadata.share}`}
                                target="_blank"
                            >
                                Share on Twitter
                            </a>
                        </p>
                    </div>
                </>
            )}
        </>
    );
}
