import React from "react"
import Link from "next/link";
import styles from "@/styles/Projectspage.module.css";
const ProjectsLayout = ({ children }) => {
    return (
        <div>
            <div className={styles.banner_container}>
                <h1>All Project</h1>
                <div className={styles.Link_tab}>
                    <Link href="/" className={styles.link_tab1}>Home</Link>
                    <span> | </span>
                    <Link href="projects" className={styles.link_tab2}>Projects</Link>
                </div>
            </div>


            <section className="main_container">
                {children}
            </section>
        </div>
    )
};

export default ProjectsLayout;
