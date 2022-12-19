// Components
import Project from "./Project";

// React Bootstrap Components
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Projects JSON
import projectData from "../projects.json";

export default function Projects({ setShowArticle, scrollToProjects }) {

  return (
      <>
        <div className="text-white">
          <h1 className="display-5 my-monospaced">Project Archive</h1>
          <p className="lead mb-5 my-sans-serif">
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
                articleLink={project.articleLink}
                articleLinkName={project.articleLinkName}
                setShowArticle={setShowArticle}
                scrollToProjects={scrollToProjects}
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
                articleLink={project.articleLink}
                articleLinkName={project.articleLinkName}
                setShowArticle={setShowArticle}
                scrollToProjects={scrollToProjects}
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
                articleLink={project.articleLink}
                articleLinkName={project.articleLinkName}
                setShowArticle={setShowArticle}
                scrollToProjects={scrollToProjects}
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
                  articleLink={project.articleLink}
                  articleLinkName={project.articleLinkName}
                  setShowArticle={setShowArticle}
                  scrollToProjects={scrollToProjects}
                />
              </Col>
            ))}
          </Row>
        </div>
      </>
  )
}