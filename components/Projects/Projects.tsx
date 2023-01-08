import Categories from "../Categories/Categories";
import Project from "./Project/Project";
import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={styles.projects}>
      <div className={styles.headingContainer}>
        <div className={styles.heading}>
          <span className="badge">My Works</span>
          <h2 className={styles.title}>Projects that I have worked on</h2>
        </div>
        
        <Categories />
      </div>
      <Project />
    </section>
  )
}

export default Projects