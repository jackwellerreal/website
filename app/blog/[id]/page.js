import styles from "../../styles/home.module.css";
import { Header, Footer } from "../../components/layout";
import BlogContent from "./blog-content";
import content from "../../../content.json";

export async function generateStaticParams() {
    return content.blog.map((post) => ({
        id: post.id,
    }));
}

export async function generateMetadata({ params }) {
    try {
        const metadata = content.blog.find((post) => post.id === params.id);

        if (!metadata) {
            throw new Error("Blog post not found");
        }

        const description =
            metadata.description || `Read "${metadata.title}" by Jack Weller`;

        return {
            title: `${metadata.title} - Jack Weller`,
            description: description,
            openGraph: {
                title: metadata.title,
                description: description,
                images: [metadata.image],
                type: "article",
            },
            twitter: {
                card: "summary_large_image",
                title: metadata.title,
                description: description,
                images: [metadata.image],
            },
        };
    } catch (error) {
        return {
            title: "Blog Post - Jack Weller",
            description: "A blog post from Jack Weller",
        };
    }
}

export default function BlogItemPage({ params }) {
    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["main"]}>
                <BlogContent blogId={params.id} />
            </main>
            <Footer />
        </div>
    );
}
