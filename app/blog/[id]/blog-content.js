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
                    <a
                        href={`https://twitter.com/intent/tweet?text=${metadata.share}`}
                        target="_blank"
                    >
                        Share on Twitter
                    </a>
                </p>
            </div>
            {scrollPosition > 100 && (
                <button
                    className={styles["scroll-to-top"]}
                    onClick={() => window.scrollTo(0, 0)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                    >
                        <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                    </svg>
                </button>
            )}
        </>
    );
}
