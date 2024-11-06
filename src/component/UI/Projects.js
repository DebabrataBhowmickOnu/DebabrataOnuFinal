// components/Projects.js
import React, { useEffect, useState } from 'react';
import styles from '@/styles/Projects.module.css';
import Link from 'next/link';
import ProjectCard from './ProjectCard';


const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch('/projects.json');
      const data = await res.json();
      setProjects(data.slice(-6)); // Get the last 8 projects
    };
    fetchProjects();
  }, []);

  return (
    <div className={styles.project_container} id="Portfolio">
      <h2>Selected Projects</h2>

      <div className={styles.project_contain_container}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      <div className={styles.see_more_link_container}>
        <Link href="/projects" className={styles.see_more_link}>
          SEE MORE
        </Link>
      </div>
    </div>
  );
};

export default Projects;
