import styles from "../home/home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

export function NotFoundPage() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <section id="projects">
                    <h2>404</h2>
                    <div>
                        <p>There is nothig here yet...</p>
                        <hr />
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <a href="javascript:history.back()">
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
