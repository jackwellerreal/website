import styles from "../styles/home.module.css";
import { Header, Footer } from "../components/layout";

import { BlogComponent } from "../components/blog";

export default function BlogPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["main"]}>
                <BlogComponent />
            </main>
            <Footer />
        </div>
    );
}
