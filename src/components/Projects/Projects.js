import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import VAARTA from "../../Assets/Projects/VAARTA.png";
import Popshop from "../../Assets/Projects/Popshop.png";
import Drishyanet from "../../Assets/Projects/Drishyanet.png";
import UrbanTastes from "../../Assets/Projects/UrbanTastes.png";
import Pcard from "../../Assets/Projects/Pcard.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Drishyanet}
              isBlog={false}
              title="Drishyanet"
              description="A Face Recognition application using MERN stack technology with Python achieving 95% accuracy in identifying faces
 from dataset."
              ghLink="https://github.com/gaurang-knight007/Drishyanet_frontend"
              demoLink="https://drishyanet.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={UrbanTastes}
              isBlog={false}
              title="UrbanTastes"
              description="An E-Commerce app using MongoDB, Express.js, React.js, and Node.js to support users, facilitating real-time orders
 and transactions."
              ghLink="https://github.com/gaurang-knight007/UrbanTastes_frontend"
              demoLink="https://urbantastes.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Pcard}
              isBlog={false}
              title="Profilecard"
              description="A profile card to connect with me on social media"
              ghLink="https://github.com/gaurang-knight007/profile-card"
              demoLink="https://gaurang-knight007.github.io/profile-card/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Popshop}
              isBlog={false}
              title="Popshop"
              description="Ongoing open source project, where users can request and see most nearest vendor where their's respective product is available."
              ghLink="https://github.com/gaurang-knight007/popshop_frontend"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={VAARTA}
              isBlog={false}
              title="VAARTA"
              description="Ongoing project, A chatting application being developed using MERN stack, socket.io and webRTC, Our Aim is to build this application using Spring Boot."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
