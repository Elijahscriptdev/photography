import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.about_container}>
        <div className={styles.about_content}>
          <h2 className={styles.about_header}>
            I'm Ready to Exceed Expectations
          </h2>
          <p className={styles.about_desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet
          </p>
        </div>

        <div className={styles.about_btn}>
          <button type='submit'>About me</button>
        </div>
      </div>
    </div>
  );
};

export default About;
