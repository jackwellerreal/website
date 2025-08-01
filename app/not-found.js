"use client";

import styles from "./styles/home.module.css";
import { Header, Footer } from "./components/layout";

export default function NotFound() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main className={styles["main"]}>
                <section id="projects" className={styles["section"]}>
                    <h2>404</h2>
                    <div>
                        <p>There is nothing here yet...</p>
                        <hr />
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <a
                                onClick={() => window.history.back()}
                                style={{ cursor: "pointer" }}
                            >
                                Go back to last page
                            </a>
                        </p>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
