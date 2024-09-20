import styles from "./ProjectsStyles.module.css";
import bmiBuddy from "../../assets/bmiBuddy.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bmiBuddy}
          link={"https://apps.apple.com/gb/app/bmi-buddy/id6683310423"}
          h3="BMI Buddy"
          p='Track & Manage Your BMI Easily'
        />
      </div>
    </section>
  );
}

export default Projects;
