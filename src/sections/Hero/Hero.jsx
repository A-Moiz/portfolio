import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import { useTheme } from "../../common/ThemeContext";
import CV from "../../assets/abdul-moiz-cv.pdf";
import referenceLetter from "../../assets/reference-letter.pdf";
import awardConfirmation from "../../assets/award-confirmation.pdf";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Abdul Moiz"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Abdul
          <br />
          Moiz
        </h1>
        <h2>Computer Science Graduate</h2>
        <span>
          <a
            href="https://www.linkedin.com/in/abdul-moiz-135580307/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>

          <a href="https://github.com/A-Moiz" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
        </span>
        <p className={styles.description}>
          A passion for developing modern iOS Applications.
        </p>
        <div className={styles.button_container}>
          <a href={CV} download>
            <button className="hover">CV</button>
          </a>
          <a href={referenceLetter} download>
            <button className="hover">Reference Letter</button>
          </a>
          <a href={awardConfirmation} download>
            <button className="hover">Award Confirmation</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
