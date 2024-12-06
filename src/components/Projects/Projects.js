import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath="https://via.placeholder.com/150"
              isBlog={false}
              title="Net-Work: Local Job Board"
              description="A local job board application connecting job seekers with local employers. Includes role-based dashboards, messaging, notifications, and job management features. Built with React, React Router, and JSON Server."
              ghLink="https://github.com/yourusername/net-work"
              demoLink="https://net-work-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/150"
              isBlog={false}
              title="CAR WORLD MANAGEMENT SYSTEM"
              description="Web-based inventory management application for tracking product quantities, updating stocks, and monitoring low stock alerts. Features real-time updates and user-friendly interfaces. Built with HTML, CSS, JavaScript, and JSON Server."
              ghLink="https://github.com/yourusername/car-world-management-system"
              demoLink="https://carworldmangementsystem.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/150"
              isBlog={false}
              title="Book Club App"
              description="A platform for book lovers to create and join virtual book clubs, track reading progress, and engage in discussions. Features club management, reviews, and dashboards. Built with React and Flask."
              ghLink="https://github.com/yourusername/book-club-app"
              demoLink="https://book-club-demo-link.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://via.placeholder.com/150"
              isBlog={false}
              title="Asset Inventory Management System"
              description="Centralized platform for tracking organizational assets with role-based permissions for requests and approvals. Features modular architecture and 85%+ test coverage. Built with Flask, PostgreSQL, ReactJS, and Redux Toolkit."
              ghLink="https://github.com/yourusername/asset-inventory-management"
              demoLink="https://asset-inventory-demo-link.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
