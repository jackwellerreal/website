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

    useEffect(() => {
        // Dynamically import title and content based on blogId
        async function fetchBlogData() {
            try {
                const titleData = await import(`../../../../blog/${blogId}/title.json`);
                const contentData = await fetch(`/blog/${blogId}/content.md`).then(res => res.text());
                setTitle(titleData);
                setContent(contentData); // Set fetched Markdown content as a string
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
                </div>
                <hr />
                <div className={styles["content"]}>
                    <Markdown>{content}</Markdown>
                </div>
                <p><a href="/blog">Back to blog</a></p>
            </main>
            <Footer />
        </div>
    );
}
