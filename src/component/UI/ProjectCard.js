import React from "react"
import styles from "@/styles/Projectspage.module.css";
import Link from "next/link";
import Image from "next/image";
const ProjectCard = ({ project }) => {
    console.log(project)
    return (
        <div key={project.id}>
            {/* <img src={project.projectImageUrl} alt={project.projectName} width={335} height={227} />
            <h3>{project.projectName}</h3>
            <p>{project.projectDescription}</p>
            <div className="tags">
                <button>{project.tags1}</button>
                <button>{project.tags2}</button>
            </div>
            <a href={project.liveProjectLink} target="_blank" rel="noopener noreferrer">
                Live Preview
            </a> */}

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
