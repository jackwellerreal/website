import styles from "./footer.module.css";

export function Footer() {

    return (
        <footer className={styles["footer"]}>
            <p>&copy; {
                new Date().getFullYear()
            } Jack Weller</p>
            <nav>
                <a href="https://github.com/jackwellerreal" target="_blank">
                    Github
                </a>
                <a
                    href="bitcoin:bc1pz33pxxuxz4jcapkulr5k0haf2kednfwev7xkvcvhdh2rp2qy0rds4nmdrl"
                    target="_blank"
                >
                    Bitcoin
                </a>
            </nav>
        </footer>
    );
}
