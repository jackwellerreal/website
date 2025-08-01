import styles from "../styles/home.module.css";
import content from "../../content.json";

export function SkillsComponent() {
    return (
        <section id="skills" className={styles["section"]}>
            <h2>Skills</h2>
            <div
                id="skillItems"
                className={`${styles["items"]} ${styles["items-skills"]}`}
            >
                {content.skills.map((skill, index) => (
                    <a
                        key={index}
                        href={`https://www.google.com/search?q=${skill}`}
                        target="_blank"
                        className={styles["skill-item"]}
                    >
                        <img
                            src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`}
                            alt={`${skill} icon`}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
