import { useNavigate } from "react-router";

import styles from "../../pages/home/home.module.css";
import content from "../../../content.json";

export function ExperienceComponent() {
    const navigate = useNavigate();

    return (
        <section id="experience">
            <h2 onClick={() => navigate("/experience")}>Experience</h2>
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
