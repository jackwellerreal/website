import styles from "../../pages/home/home.module.css";

import content from "../../../content.json";

export function ExperienceComponent() {
    return (
        <section id="experience">
            <h2>Experience</h2>
            <div id="experienceItems" className={styles["items"]}>
                {content.experience.map((experience, index) => (
                    <div key={index} className={styles["item"]}>
                        <h3>{experience.title}</h3>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
