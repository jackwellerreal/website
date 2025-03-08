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
                    <img
                        src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill}/${skill}-original.svg`}
                        key={index}
                    />
                ))}
            </div>
        </section>
    );
}
