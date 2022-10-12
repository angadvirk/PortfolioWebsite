import { useRef, useLayoutEffect } from 'react';

// Components
import Project from '../components/Project';
import Skill from '../components/Skill';
import MyNav from '../components/MyNav';
import Footer from '../components/Footer';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

// React Router Bootstrap
import { LinkContainer } from 'react-router-bootstrap';

// Projects JSON
import projectData from "../projects.json";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import angad from '../assets/angad.jpeg';

export default function Home() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0) // scroll to top when route opened
  });

  // For scrolling
  const navbarRef = useRef(null);
  const scrollToNavbar = () => navbarRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <Container id="about" className="p-4 d-flex justify-content-center align-items-center fill-viewport-height" fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={angad} alt="Angad" className="mb-4 hero-img-height" roundedCircle fluid/>
          </Col>
          <Col className="hero-text">
            <h1 className="display-4 mb-3">👋 Hi, I'm Angad.</h1>
            <p className="lead mb-4">I'm a Software Engineer who builds Web 🕸 and Mobile 📱 Apps.</p>
            <Button variant="outline-secondary" className="me-1" onClick={scrollToNavbar}>More About Me</Button>{' '}
            <Button variant="outline-danger" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">
              View Resumé
            </Button>
          </Col>
        </Row>
      </Container>

      <MyNav customRef={navbarRef}/>
      
      <Container id="projects" className="bg-secondary p-5" fluid>
        <div className="text-white">
          <h1 className="display-5">Featured Projects</h1>
          <p className="lead mb-2">
            Recent projects that I'm particularly proud of. 
            {' '}
          </p>

          <Container className="d-flex justify-content-end p-0 mb-4" fluid>
            <LinkContainer to="/projects">
              <p className="lead mylink">See All Projects 👉</p>
            </LinkContainer>
          </Container>

        </div>
        <Row>
          {projectData.filter(project => (projectData.indexOf(project) < 3)).map(project => (
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
      </Container>

      <Container id="skills" className="bg-white p-5 pb-5" fluid>
        <h1 className="display-5">Skills</h1>
        <p className="mb-4 lead">Some of the things I'm good at.</p>
        <Row>
          <Col lg={6}>
            <Skill title="JavaScript" percentage={50} />
            <Skill title="React" percentage={70} />
            <Skill title="Python" percentage={50} />
          </Col>
          <Col lg={6}>
            <Skill title="SQL" percentage={40} />
            <Skill title="HTML" percentage={60} />
            <Skill title="CSS" percentage={65} />
          </Col>
        </Row>
      </Container>

      {/* <Container id="miscellaneous" className="bg-secondary p-5" fluid>
          <Row>
            <Col md={6}>
              <Container className="bg-white shadow rounded p-4 mb-4" fluid>
                <Row>
                  <Col>
                    <p className="mb-1"><i className="bi bi-music-note-list"></i> Last listened to:</p>
                    <h2>Lorem Ipsum</h2>
                    <div className="d-flex justify-content-between">
                      <p className="mb-0"><strong>By</strong> Dolor Sit Amet</p>
                      <Button variant="link"></Button>
                      <p className="mb-0">Powered by <strong><i className="bi bi-spotify"></i> Spotify</strong></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="text-white">
              <h1 className="display-6"><strong>Thought of the Day</strong> <small className="change-thought-button" onClick={() => {console.log("test")}}>(or not)</small></h1>
              <p className="lead mb-1">“Evil is whatever distracts.”</p>
            </Col>
          </Row>
      </Container> */}

      <Footer />

    </div>
  );
}