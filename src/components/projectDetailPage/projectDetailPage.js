import { useData } from "../../context/context";
import { useParams } from "react-router-dom";

import Carousel from "react-bootstrap/Carousel";
import styles from "./projectDetailPage.module.css";

const ProjectDetailPage = () => {
  const { projectData } = useData();
  const {id}=useParams()
  const clikedProject=projectData.find(eachItem=>eachItem.id===id)

  const {
    projectName,
    projectType,
    projectImg1,
    projectImg2,
    projectImg3,
    gitHubUrl,
    projectDemoUrl,
  } = clikedProject
  return (
    <div className={`d-flex align-items-center justify-content-center ${styles.detailContainer}`}>
      <div className={`${styles.container} d-flex flex-column flex-sm-row p-sm-3 m-3`}>
        <div className={`${styles.carouselContainer}`}>
          <Carousel data-bs-theme="dark" >
            <Carousel.Item className={`${styles.curosel}`}>
              <img
                className="d-block w-100"
                src={projectImg1}
                alt="first slide"
                width="100%"
                height="180px"
              />
            </Carousel.Item>
            <Carousel.Item className={`${styles.curosel}`}>
              <img
                className="d-block w-100"
                src={projectImg2}
                alt="Second slide"
                width="100%"
                height="180px"
              />
            </Carousel.Item>
            <Carousel.Item className={`${styles.curosel}`}>
              <img
                className="d-block w-100"
                src={projectImg3}
                alt="Third slide"
                width="100%"
                height="180px"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className={`${styles.contentContainer}`}>
          <h2>{projectName}</h2>
          <p>Project Type: {projectType}</p>
          <div className={`${styles.containerBtns}`}>
            <button className="btn btn-primary">
              <a
                href={gitHubUrl}
                target="#blank"
                className="text-decoration-none text-light fw-semibold"
              >
                Source Code
              </a>
            </button>
            <button className="btn btn-primary">
              <a
                href={projectDemoUrl}
                target="#blank"
                className="text-decoration-none text-light fw-semibold"
              >
                Live Demo
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetailPage;
