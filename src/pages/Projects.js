import { useLayoutEffect } from "react";

// Components
import MyNav from "../components/MyNav";
import Project from "../components/Project";
import Footer from "../components/Footer";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Projects JSON
import projectData from "../projects.json";

export default function Projects() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0) // scroll to top when route opened
  });

  return (
    <div>
      <MyNav />
      <Container className="bg-secondary p-5" fluid>
        <div className="text-white">
          <h1 className="display-5">Projects Portfolio</h1>
          <p className="lead mb-5">
            A more exhaustive list of the projects I've worked on. Includes school and work projects, spare-time-tinkers, and everything in between.
            {' '}
          </p>
        </div>

        <div className="d-none d-lg-block">
        <Row>
          <Col lg={4}>
          {projectData.filter(project => (projectData.indexOf(project) % 3 === 0 ))
          .map(project => (
              <Project 
                key={project.id}
                image={project.image}
                title={project.title}
                date={project.date}
                subtitle={project.subtitle}
                description={project.description}
                firstLink={project.firstLink}
                firstLinkIcon={project.firstLinkIcon}
                secondLink={project.secondLink}
                secondLinkName={project.secondLinkName}
                secondLinkIcon={project.secondLinkIcon}
                thirdLink={project.thirdLink}
                thirdLinkName={project.thirdLinkName}
                thirdLinkIcon={project.thirdLinkIcon}
                routerLink={project.routerLink}
                routerLinkName={project.routerLinkName}
              />
          ))}
          </Col>
          <Col lg={4}>
          {projectData.filter(project => ((projectData.indexOf(project) + 2) % 3 === 0 ))
          .map(project => (
              <Project 
                key={project.id}
                image={project.image}
                title={project.title}
                date={project.date}
                subtitle={project.subtitle}
                description={project.description}
                firstLink={project.firstLink}
                firstLinkIcon={project.firstLinkIcon}
                secondLink={project.secondLink}
                secondLinkName={project.secondLinkName}
                secondLinkIcon={project.secondLinkIcon}
                thirdLink={project.thirdLink}
                thirdLinkName={project.thirdLinkName}
                thirdLinkIcon={project.thirdLinkIcon}
                routerLink={project.routerLink}
                routerLinkName={project.routerLinkName}
              />
          ))}
          </Col>
          <Col lg={4}>
          {projectData.filter(project => ((projectData.indexOf(project) + 1) % 3 === 0 ))
          .map(project => (
              <Project 
                key={project.id}
                image={project.image}
                title={project.title}
                date={project.date}
                subtitle={project.subtitle}
                description={project.description}
                firstLink={project.firstLink}
                firstLinkIcon={project.firstLinkIcon}
                secondLink={project.secondLink}
                secondLinkName={project.secondLinkName}
                secondLinkIcon={project.secondLinkIcon}
                thirdLink={project.thirdLink}
                thirdLinkName={project.thirdLinkName}
                thirdLinkIcon={project.thirdLinkIcon}
                routerLink={project.routerLink}
                routerLinkName={project.routerLinkName}
              />
          ))}
          </Col>
        </Row>
        </div>
        <div className="d-lg-none">
          <Row>
            {projectData.map(project => (
              <Col lg={4} key={project.id}>
                <Project 
                  image={project.image}
                  title={project.title}
                  date={project.date}
                  subtitle={project.subtitle}
                  description={project.description}
                  firstLink={project.firstLink}
                  firstLinkIcon={project.firstLinkIcon}
                  secondLink={project.secondLink}
                  secondLinkName={project.secondLinkName}
                  secondLinkIcon={project.secondLinkIcon}
                  thirdLink={project.thirdLink}
                  thirdLinkName={project.thirdLinkName}
                  thirdLinkIcon={project.thirdLinkIcon}
                  routerLink={project.routerLink}
                  routerLinkName={project.routerLinkName}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Footer />
    </div>
  )
}