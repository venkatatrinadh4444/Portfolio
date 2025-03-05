import styles from "./about.module.css";
import about from '../../assets/about.png'

const About = () => {
  return (
    <div className={`${styles.container} p-5`}>
      <h1>About</h1>
      <div className={`d-flex align-items-center`}>
        <div className={`d-none d-sm-block ${styles.imageContainer}`}>
          <img
            src={about}
            alt="aboutImg"
            width="100%"
          />
        </div>
        <div>
          <div className={`${styles.message}`}>
            <h5>Frontend Developer</h5>
            <p>
              I'm a front-end developer with experience in building responsive
              and optimized sites.
            </p>
          </div>
          <div className={`${styles.message}`}>
            <h5>Backend Developer</h5>
            <p>
              I'am very entusiast to new learn backend development currently I'm
              working in frontend in future I definetly learn backend
              development as well.
            </p>
          </div>
          <div className={`${styles.message}`}>
            <h5>MERN Stack Developer</h5>
            <p>
              I'm planning to learn MERN and I want to become a MERN stack
              developer in my future.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
