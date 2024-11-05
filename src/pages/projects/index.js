
import ProjectsLayout from "@/component/Layout/ProjectsLayout";
import React, { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import ProjectCard from "@/component/UI/ProjectCard";
import styles from "@/styles/Projectspage.module.css";

// Number of items to display per page
const ITEMS_PER_PAGE = 6;

const Projects = (props) => {
  const { projects } = props;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for current page
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages for pagination
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  // Handle page navigation based on number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className={styles.project_contain_container3}>
      {currentItems.map((project) => (
          <ProjectCard key={project.id} project={project} />  
        ))}
      </div>
      
      {/* Numbered Pagination */}
      <div className="pagination">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Projects;

Projects.getLayout = function getLayout(page) {
  return <ProjectsLayout>{page}</ProjectsLayout>;
};

// Load the projects data from the `projects.json` file
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "public", "projects.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(jsonData);

  return {
    props: {
      projects,
    },
  };
}
