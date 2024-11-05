import React from "react"
import styles from "@/styles/Projectspage.module.css";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = ({ project }) => {
    return (
        <div key={project.id}>
            <div className={styles.project_contain}>
                <div>
                    <Image
                        src={project.projectImageUrl}
                        width={335}
                        height={227}
                        alt="Logo"
                        className={styles.logo}
                    />
                </div>
                <h3>{project.projectName}</h3>
                <p>{project.projectDescription}</p>
                <div className={styles.button_container}>
                    <button>{project.tags1}</button>
                    <button>{project.tags2}</button>
                </div>
                <Link href={project.liveProjectLink} className={styles.project_link}>Live Prevuew</Link>

            </div>
        </div>
    )
};

export default ProjectCard;