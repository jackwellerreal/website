import styles from "../../pages/home/home.module.css";
import content from "../../../content.json";

export function SkillsComponent() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <div
                id="skillItems"
                className={styles["items"]}
                style={{
                    gridTemplateColumns: `repeat(${content.skills.length}, 1fr)`,
                }}
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
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
