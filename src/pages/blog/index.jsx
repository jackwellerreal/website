import styles from "../home/home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import { BlogComponent } from "../../components/blog";

export function BlogPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <BlogComponent />
            </main>
            <Footer />
        </div>
    );
}
