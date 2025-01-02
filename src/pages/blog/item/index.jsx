import styles from "./item.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Markdown from 'react-markdown';

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

export function BlogItem() {
    let params = useParams();
    const blogId = params.id;

    const [title, setTitle] = useState(null);
    const [content, setContent] = useState("");
    const [readTime, setReadTime] = useState(0);

    // Function to calculate read time in minutes
    function calculateReadTime(text) {
        const wordCount = text.split(/\s+/).length; // Split text by spaces and count words
        const wordsPerMinute = 300; // Average reading speed in words per minute
        return Math.ceil(wordCount / wordsPerMinute); // Round up to the nearest minute
    }

    useEffect(() => {
        // Dynamically fetch title and content based on blogId
        async function fetchBlogData() {
            try {
                // Fetch title.json from the public folder
                const titleData = await fetch(`/blog/${blogId}/title.json`).then(res => res.json());
                // Fetch content.md from the public folder
                const contentData = await fetch(`/blog/${blogId}/content.md`).then(res => res.text());

                setTitle(titleData);
                setContent(contentData);
                setReadTime(calculateReadTime(contentData)); // Set read time after content is fetched
            } catch (error) {
                console.error("Error loading blog data:", error);
            }
        }

        fetchBlogData();
    }, [blogId]);

    if (!title) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <div className={styles["title"]}>
                    <img src={title.image} alt="Blog title" />
                    <h1>{title.title}</h1>
                    <p>{title.description}</p>
                    <p className={styles["subtitle"]}>
                        Estimated read time: {readTime} minute{readTime > 1 ? 's' : ''}
                    </p>
                </div>
                <hr />
                <div className={styles["content"]}>
                    <Markdown>{content}</Markdown>
                    <p><a href="/blog">Back to blog</a></p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
