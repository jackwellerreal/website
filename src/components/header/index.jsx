import styles from "./header.module.css";

export function Header() {

    return (
        <header>
            <a href="/">
                <h1>Jack Weller</h1>
            </a>
            <nav>
                <a href="/projects/">Projects</a>
                <a href="/blog/">Blog</a>
                <a href="/contact/">Contact</a>
            </nav>
        </header>
    );
}
