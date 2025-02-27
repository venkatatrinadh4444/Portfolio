import { useData } from "../../context/context";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import styles from './projectPage.module.css';
import {Link} from 'react-router-dom'


const Projects = () => {
  const { authenticatedUser, projectData } = useData();

  const projectSectionNames = [
    ...new Set(projectData?.map((eachItem) => eachItem.projectType)),
  ];

  const [selectedType, setSelectedType] = useState("JavaScript");

  const filteredData = projectData.filter(
    (eachItem) => eachItem.projectType === selectedType
  );

  return (
    <Container fluid className={`${styles.container}`}>
      <Row className="d-flex justify-content-center">
        <h1 className={`${styles.heading}`}>Projects</h1>
      </Row>
      <Row>
        <div className={`d-flex justify-content-between ps-4 pe-4`}>
          {projectSectionNames &&
            projectSectionNames.map((eachName) => {
              return (
                <button
                  className={`${styles.button} ${eachName===selectedType?styles.selectedBtn:''}`}
                  key={eachName}
                  onClick={() => setSelectedType(eachName)}
                >
                  {eachName}
                </button>
              );
            })}
        </div>
      </Row>
      <Row>
        <Col className={`${styles.imagesContainer} mt-3 d-flex justify-content-center justify-content-lg-betweeen`}>
          {filteredData.length > 0 &&
            filteredData.map((eachItem) => {
              return (
                <Link to={`/projects/${eachItem.id}`} key={eachItem.id}>
                <div className={`${styles.projectContainer} shadow`}>
                  <img
                    src={eachItem.projectImg1}
                    alt={eachItem.projectName}
                    width="100%" height="130px"
                  />
                </div>
                </Link>
              );
            })}
        </Col>
      </Row>
    </Container>
  );
};
export default Projects;
