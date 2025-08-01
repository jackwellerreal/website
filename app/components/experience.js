import styles from "../styles/home.module.css";
import content from "../../content.json";

export function ExperienceComponent() {
    return (
        <section id="experience" className={styles["section"]}>
            <h2>Experience</h2>
            <div id="experienceItems" className={styles["items"]}>
                {content.experience.map((experience, index) => (
                    <div key={index} className={styles["item"]}>
                        <h3>
                            {experience.title}
                            <span style={{ fontSize: "12px" }}>
                                {experience.time}
                            </span>
                        </h3>
                        <h5>@ {experience.location}</h5>
                        <p>{experience.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
