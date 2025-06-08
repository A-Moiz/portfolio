import styles from "./ProjectsStyles.module.css";
import bmiBuddy from "../../assets/bmiBuddy.png";
import vocabio from "../../assets/vocabio.png";
import ProjectCard from "../../common/ProjectCard";
import opbr from "../../assets/opbr-companion.png";
import listIt from "../../assets/list-it.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={bmiBuddy}
          link={"https://apps.apple.com/gb/app/bmi-buddy/id6683310423"}
          h3="BMI Buddy"
          p="Track & Manage Your BMI Easily"
        />

        <ProjectCard
          src={vocabio}
          link={"https://apps.apple.com/gb/app/vocabio/id6737419951"}
          h3="Vocabio"
          p="Decode Today's Slang"
        />

        <ProjectCard
          src={opbr}
          link={"https://apps.apple.com/gb/app/opbr-companion/id6737994116"}
          h3="OPBR Companion"
          p="Game Strategies & Tips Guide"
        />

        <ProjectCard
          src={listIt}
          link={
            "https://apps.apple.com/gb/app/list-it-simple-to-do-list/id6746731233"
          }
          h3="List It"
          p="Simple To Do List"
        />
      </div>
    </section>
  );
}

export default Projects;
