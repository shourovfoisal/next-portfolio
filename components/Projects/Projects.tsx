import { useState } from "react";
import Categories from "../Categories/Categories";
import Project from "./Project/Project";
import styles from "./Projects.module.scss";

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      cat_id: 1,
      name: 'Project 1',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 2,
      cat_id: 1,
      name: 'Project 2',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 3,
      cat_id: 2,
      name: 'Project 3',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    {
      id: 4,
      cat_id: 1,
      name: 'Project 4',
      url: 'https://www.google.com',
      imgUrl: 'https://via.placeholder.com/500x500.png'
    },
    // {
    //   id: 5,
    //   cat_id: 3,
    //   name: 'Project 5',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 6,
    //   cat_id: 2,
    //   name: 'Project 6',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 7,
    //   cat_id: 3,
    //   name: 'Project 7',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
    // {
    //   id: 8,
    //   cat_id: 3,
    //   name: 'Project 8',
    //   url: 'https://www.google.com',
    //   imgUrl: 'https://via.placeholder.com/500x500.png'
    // },
  ]
  
  const [filtered, setFiltered] = useState(projects);
  
  const filterProjects = (id: any) => {
    if(id === 0) {
      setFiltered(projects);
      return;
    }
    
    const filteredProjects = projects.filter(project => project.cat_id === id);
    setFiltered(filteredProjects);
  }
  
  return (
    <section className={styles.projects}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <span className="badge">My Works</span>
          <h2 className={styles.title}>Projects that I have worked on</h2>
        </div>
        
        <Categories filterProjects={filterProjects} />
      </div>
      <div className={styles.itemsContainer}>
        {
          filtered.map((project, index) => <Project key={index} project={project} />)
        }
      </div>
    </section>
  )
}

export default Projects