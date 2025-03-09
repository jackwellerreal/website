import styles from "./item.module.css";

import { Header } from "../../../components/header";
import { Footer } from "../../../components/footer";

import { BlogItemComponent } from "../../../components/blog/item";

export function BlogItemPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <BlogItemComponent />
            </main>
            <Footer />
        </div>
    );
}
