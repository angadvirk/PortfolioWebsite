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
            <Project 
              image={projectData[0].image}
              title={projectData[0].title}
              date={projectData[0].date}
              subtitle={projectData[0].subtitle}
              description={projectData[0].description}
              firstLink={projectData[0].firstLink}
              firstLinkIcon={projectData[0].firstLinkIcon}
              secondLink={projectData[0].secondLink}
              secondLinkName={projectData[0].secondLinkName}
            />
            <Project 
              image={projectData[3].image}
              title={projectData[3].title}
              date={projectData[3].date}
              subtitle={projectData[3].subtitle}
              description={projectData[3].description}
              firstLink={projectData[3].firstLink}
              secondLink={projectData[3].secondLink}
              secondLinkName={projectData[3].secondLinkName}
              thirdLink={projectData[3].thirdLink}
              thirdLinkName={projectData[3].thirdLinkName}
            />
          </Col>
          <Col lg={4}>
            <Project 
              image={projectData[1].image}
              title={projectData[1].title}
              date={projectData[1].date}
              subtitle={projectData[1].subtitle}
              description={projectData[1].description}
              firstLink={projectData[1].firstLink}
              secondLink={projectData[1].secondLink}
              secondLinkName={projectData[1].secondLinkName}
              routerLink={projectData[1].routerLink}
              routerLinkName={projectData[1].routerLinkName}
            />
            <Project 
              image={projectData[4].image}
              title={projectData[4].title}
              date={projectData[4].date}
              subtitle={projectData[4].subtitle}
              description={projectData[4].description}
              firstLink={projectData[4].firstLink}
              firstLinkIcon={projectData[4].firstLinkIcon}
              secondLink={projectData[4].secondLink}
              secondLinkName={projectData[4].secondLinkName}
            />
          </Col>
          <Col lg={4}>
            <Project 
              image={projectData[2].image}
              title={projectData[2].title}
              date={projectData[2].date}
              subtitle={projectData[2].subtitle}
              description={projectData[2].description}
              firstLink={projectData[2].firstLink}
              firstLinkIcon={projectData[2].firstLinkIcon}
              secondLink={projectData[2].secondLink}
              secondLinkName={projectData[2].secondLinkName}
            />
            <Project 
              image={projectData[5].image}
              title={projectData[5].title}
              date={projectData[5].date}
              subtitle={projectData[5].subtitle}
              description={projectData[5].description}
              firstLink={projectData[5].firstLink}
              firstLinkIcon={projectData[5].firstLinkIcon}
              secondLink={projectData[5].secondLink}
              secondLinkName={projectData[5].secondLinkName}
              secondLinkIcon={projectData[5].secondLinkIcon}
              thirdLink={projectData[5].thirdLink}
              thirdLinkName={projectData[5].thirdLinkName}
              thirdLinkIcon={projectData[5].thirdLinkIcon}
            />
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