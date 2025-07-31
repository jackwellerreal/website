import { useEffect, useState } from "react";
import { useParams } from "react-router";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet-async";

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
    const [scrollPosition, setScrollPosition] = useState(0);

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

    useEffect(() => {
        window.addEventListener(
            "scroll",
            () => {
                setScrollPosition(window.pageYOffset);
            },
            { passive: true }
        );

        return () => {
            window.removeEventListener("scroll", () => {
                setScrollPosition(window.pageYOffset);
            });
        };
    }, []);

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
                    <Metadata content={metadata} />

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
                    {scrollPosition > 100 && (
                        <button
                            className={styles["scroll-to-top"]}
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 384 512"
                            >
                                <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                            </svg>
                        </button>
                    )}
                </>
            )}
        </>
    );
}

function Metadata({ content }) {
    return (
        <Helmet>
            <title>{content.title} - Jack Weller</title>
            <meta name="description" content={content.description} />
            <meta name="theme-color" content="#699ce2" />

            <meta property="og:title" content={content.title} />
            <meta property="og:description" content={content.description} />
            <meta property="og:image" content={content.image} />
            <meta property="og:type" content="article" />
            <meta property="og:url" content={window.location.href} />
            <meta
                property="twitter:card"
                content="summary_large_image"
            />
            <meta property="twitter:title" content={content.title} />
            <meta property="twitter:description" content={content.description} />
            <meta property="twitter:image" content={content.image} />
        </Helmet>
    );
}

Metadata.propTypes = {
    content: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        date: PropTypes.string,
        share: PropTypes.string,
    }).isRequired,
};