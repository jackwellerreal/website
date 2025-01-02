import styles from "../home/home.module.css";

import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

import content from "../../../items.json";

export function Contact() {
    return (
        <div className={styles["container"]}>
            <Header />
            <main>
                <section id="projects">
                    <h2>Projects</h2>
                    <div>
                        <h3>Email</h3>
                        <a href="mailto:contact@jackweller.me">
                            contact@jackweller.me
                        </a>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
