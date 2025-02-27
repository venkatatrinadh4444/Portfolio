import styles from "./about.module.css";

const About = () => {
  return (
    <div className={`${styles.container} p-5`}>
      <h1>About</h1>
      <div className={`d-flex align-items-center`}>
        <div className={`d-none d-sm-block ${styles.imageContainer}`}>
          <img
            src="https://s3-alpha-sig.figma.com/img/f80e/4d21/bb6fc49f7303f3ffb733c16acae12bb1?Expires=1740960000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=aIXSU7-rHWoQheQfr7LrHAlu2Rvc0EdrlXXqy5dsKNV3gSvzjdPKimtyqllEbKf~Pg2KAt9pmTOuXKT2buBWEOe5esKjxC-WORwIfXRJ9Syoeo3WmRZ1FT3vZu3EjJJcBQSNqlg~etLSvHZ3B02-LCbpXC-KQLupSpqMe8Gu5ywGZYfWby1LMU4RZaytOti06J538HDJ0~CFTk7IKlKWs9i095qSnMBnoqR21DUz~RvdjF78U1jmqZQL4ByZfYTjATgavYf3gFJg--L9kO37QfY7LUuU6bJm6MaECNkuJLS9a9JUqjXn7pTY1MVgRX1PvU-iSN8vpL~jfuWiXaQo~g__"
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
