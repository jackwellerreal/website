import styles from "./footer.module.css";

export function Footer() {
    return (
        <footer className={styles["footer"]}>
            <p>&copy; {new Date().getFullYear()} Jack Weller</p>
            <nav>
                <a href="https://github.com/jackwellerreal" target="_blank">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 496 512"
                    >
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                    </svg>
                </a>
                <a
                    href="bitcoin:bc1pz33pxxuxz4jcapkulr5k0haf2kednfwev7xkvcvhdh2rp2qy0rds4nmdrl"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                    >
                        <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-141.7-35.3c4.9-33-20.2-50.7-54.6-62.6l11.1-44.7-27.2-6.8-10.9 43.5c-7.2-1.8-14.5-3.5-21.8-5.1l10.9-43.8-27.2-6.8-11.2 44.7c-5.9-1.3-11.7-2.7-17.4-4.1l0-.1-37.5-9.4-7.2 29.1s20.2 4.6 19.8 4.9c11 2.8 13 10 12.7 15.8l-12.7 50.9c.8 .2 1.7 .5 2.8 .9-.9-.2-1.9-.5-2.9-.7l-17.8 71.3c-1.3 3.3-4.8 8.4-12.5 6.5 .3 .4-19.8-4.9-19.8-4.9l-13.5 31.1 35.4 8.8c6.6 1.7 13 3.4 19.4 5l-11.3 45.2 27.2 6.8 11.2-44.7a1038.2 1038.2 0 0 0 21.7 5.6l-11.1 44.5 27.2 6.8 11.3-45.1c46.4 8.8 81.3 5.2 96-36.7 11.8-33.8-.6-53.3-25-66 17.8-4.1 31.2-15.8 34.7-39.9zm-62.2 87.2c-8.4 33.8-65.3 15.5-83.8 10.9l14.9-59.9c18.4 4.6 77.6 13.7 68.8 49zm8.4-87.7c-7.7 30.7-55 15.1-70.4 11.3l13.5-54.3c15.4 3.8 64.8 11 56.8 43z" />
                    </svg>
                </a>
            </nav>
        </footer>
    );
}
