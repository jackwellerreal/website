"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import moment from "moment";

import styles from "../../styles/home.module.css";
import content from "../../../content.json";

export default function BlogContent({ blogId }) {
    const [metadata, setMetadata] = useState(null);
    const [blogContent, setBlogContent] = useState("");
    const [readTime, setReadTime] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);

    function calculateReadTime(text) {
        const wordCount = text.split(/\s+/).length;
        const wordsPerMinute = 300;
        return Math.ceil(wordCount / wordsPerMinute);
    }

    useEffect(() => {
        if (!blogId) return;

        async function fetchBlogData() {
            try {
                const metaData = content.blog.find(
                    (post) => post.id === blogId
                );

                const contentData = await fetch(
                    `/blog/${blogId}/content.md`
                ).then((res) => res.text());

                setMetadata(metaData);
                setBlogContent(contentData);
                setReadTime(calculateReadTime(contentData));
            } catch (error) {
                console.error("Error loading blog data:", error);
            }
        }

        fetchBlogData();
    }, [blogId]);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.pageYOffset);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    if (!metadata || !blogContent) {
        return (
            <div className={styles["content"]}>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div className={styles["title"]}>
                <img src={metadata.image} alt="Blog title" />
                <h1>{metadata.title}</h1>
                <p className={styles["subtitle"]}>
                    <span>{moment(metadata.date, "DD/MM/YYYY").fromNow()}</span>
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
                    {blogContent}
                </Markdown>
                <hr />
                <p
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Link href="/blog">Back to blog</Link>
                </p>
            </div>
            {scrollPosition > 100 && (
                <button
                    className={styles["scroll-to-top"]}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M413 251.562C405.14 259.812 394.578 264 384 264C374.093 264 364.187 260.344 356.453 253L264 165.18V440C264 462.094 246.093 480 224 480S184 462.094 184 440V165.18L91.547 253C75.562 268.188 50.234 267.531 35 251.562C19.781 235.531 20.437 210.219 36.453 195L196.453 43C211.89 28.312 236.109 28.312 251.547 43L411.547 195C427.562 210.219 428.218 235.531 413 251.562Z" />
                    </svg>
                </button>
            )}
        </>
    );
}
