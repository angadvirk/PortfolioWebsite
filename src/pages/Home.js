import { useRef, useEffect, useState } from 'react';

// Components
import Project from '../components/Project';
import Projects from '../components/Projects';
import Article from "../components/Article";
import Skill from '../components/Skill';
import MyNav from '../components/MyNav';
import MyNavLink from '../components/MyNavLink';
import Footer from '../components/Footer';

// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import { LinkContainer } from 'react-router-bootstrap';

// Projects JSON
import projectData from "../projects.json";

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Images
import angad from '../assets/angad.jpeg';

export default function Home() {

  // Refs
  const navbarRef = useRef(null);
  const projectsContainerRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const catfactContainerRef = useRef(null);
  const skillsRef = useRef(null);

  // State
  const [showAllProjects, setShowAllProjects] = useState(false); // show projects
  const [showArticle, setShowArticle] = useState(false); // show article
  const [skillAnimationComplete, setSkillAnimationComplete] = useState(false); // animate skills
  const [showCatfact, setShowCatfact] = useState(false); // to show catfact box immediately when user clicks
  const [catfact, setCatfact] = useState(null); // to store catfact received from API call
  const [spotifyData, setSpotifyData] = useState(null); // to store spotify track data received from API call

  // scroll functions... could have just made one function that takes 'top' argument perhaps but this works for now
  const scrollToTop = () => window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

  const scrollToProjects = () => window.scrollTo({ 
    top: (projectsContainerRef.current.getBoundingClientRect().top + window.scrollY) - navbarRef.current.getBoundingClientRect().height,
    behavior: "smooth" 
  });

  const scrollToSkills = () => window.scrollTo({
    top: (skillsContainerRef.current.getBoundingClientRect().top + window.scrollY) - navbarRef.current.getBoundingClientRect().height,
    behavior: "smooth"
  });

  const scrollToCatfact = () => window.scrollTo({
    top: (catfactContainerRef.current.getBoundingClientRect().top + window.scrollY) - navbarRef.current.getBoundingClientRect().height,
    behavior: "smooth"
  })

  useEffect(() => {  
    const fetchData = async (url, songs) => {
      const response = await fetch(`${url}/api?songs=${songs}`);
      const data = await response.json();
      setSpotifyData({
        name: data.items[0].track.name,
        artist: data.items[0].track.artists[0].name,
        image_uri: data.items[0].track.album.images[0].url,
        artist_url: data.items[0].track.artists[0].external_urls.spotify,
        external_url: data.items[0].track.external_urls.spotify,
      });
    };
    const prod_url = 'https://spotify-api-mastercruncher.ue.r.appspot.com';
    const songs = 1;
    fetchData(prod_url, songs); // get spotify data
  }, []);

  useEffect(() => {
    // scroll to page bottom when catfact is set
    if (catfact !== null) {
      scrollToCatfact();
    }
  }, [catfact]);

  useEffect(() => {
    // to observe when scroll reaches skills progress bars, and trigger animation when this happens
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      // console.log('entry', entry);
      // console.log('entry.isIntersecting', entry.isIntersecting);
      if (entry.isIntersecting && !skillAnimationComplete) {
        const progressBars = document.querySelectorAll('.progress');
        progressBars.forEach((element) => {
          element.children[0].style.animationPlayState = 'running';
        });
        setSkillAnimationComplete(true); 
      }
    });
    observer.observe(skillsRef.current);
  }, [skillAnimationComplete]);

  return (
    <div>
      <Container id="about" className="my-bg-primary p-4 d-flex justify-content-center align-items-center fill-viewport-height" fluid>
        <Row className="align-items-center">
          <Col md={6} className="text-center">
            <Image src={angad} alt="Angad" className="mb-4 my-shadow-secondary hero-img-height" rounded fluid/>
          </Col>
          <Col className="hero-text">
            <h1 className="display-4 mb-3">👋{" "}<span className="my-monospaced display-6">Hi, I'm Angad.</span></h1>
            <div className="lead mb-4 my-sans-serif">
              <div className="d-flex">
                <p className="me-2">🖥</p>
                <p className="mb-1" style={{marginBottom: 0}}>I'm a Software Engineer who builds <strong>Web</strong> and <strong>Mobile</strong> Apps.</p> 
              </div>
              <div className="d-flex">
                <p className="me-2">🛠</p>
                <p className="mb-1" style={{marginBottom: 0}}>I designed and developed this website to showcase my work.</p>
              </div>
              <div className="d-flex">
                <p className="me-2">🏝</p><p>I hope you enjoy your visit!</p>
              </div>
            </div>
            <button className="me-1 my-btn-solid-secondary" onClick={scrollToProjects}>More About Me</button>{' '}
            <a href="/assets/resume.pdf">
            <button className="my-btn-solid-secondary" target="_blank" rel="noopener noreferrer">
              Resumé
            </button>
            </a>
          </Col>
        </Row>
      </Container>

      <MyNav 
        customRef={navbarRef} 
        scrollToTop={scrollToTop}
        scrollToProjects={scrollToProjects}
        setShowAllProjects={setShowAllProjects}
        setShowArticle={setShowArticle}
        showArticle={showArticle}
        scrollToSkills={scrollToSkills}
      />
      
      <div ref={projectsContainerRef}>
        <Container id="projects" className="my-bg-secondary p-5" fluid>
        {showArticle &&
        <>
          <MyNavLink
            type="back"
            text="👈 Back to Projects"
            setter={setShowArticle}
            scrollToProjects={scrollToProjects}
          />
          <Article />
          <MyNavLink
            type="top"
            text="👆 Back to Top"
            scrollToProjects={scrollToProjects}
          />
        </>}
        {showAllProjects && !showArticle &&
        <>
          <MyNavLink
            type="back"
            text="👈 Back to Featured Projects"
            setter={setShowAllProjects}
            scrollToProjects={scrollToProjects}
          />
          <Projects
            setShowArticle={setShowArticle}
            scrollToProjects={scrollToProjects}
          />
          <MyNavLink
            type="top"
            text="👆 Back to Top"
            scrollToProjects={scrollToProjects}
          />
        </>}
        {!showAllProjects && !showArticle &&
        <>
          <div className="text-white">
            <h1 className="display-5 my-monospaced">Featured Projects</h1>
            <p className="lead mb-2 my-sans-serif">
              Some of my recent projects.
              {' '}
            </p>
            <Container className="d-flex justify-content-end p-0 mb-4" fluid>
              <p
                className="lead mylink my-monospaced"
                onClick={() => {
                  scrollToProjects();
                  setShowAllProjects(true);
                }}>
                See All Projects 👉
              </p>
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
                  articleLink={project.articleLink}
                  articleLinkName={project.articleLinkName}
                  scrollToProjects={scrollToProjects}
                  setShowArticle={setShowArticle}
                />
              </Col>
            ))}
          </Row>
        </>}
        </Container>
      </div>
      
      <div ref={skillsContainerRef}>
      <Container id="skills" className="my-bg-primary p-5 pb-5" fluid>
        <h1 className="display-5 my-monospaced">Skills</h1>
        <p className="mb-4 lead my-sans-serif">I've recently worked with the following technologies.</p>
        <div ref={skillsRef}>
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
        </div>
      </Container>
      </div>

      <Container id="miscellaneous" className="my-bg-secondary p-5" fluid>
          <Row>
            <Col md={6}>
              <Container className="my-bg-tertiary my-shadow rounded p-4 mb-4 text-white" fluid>
                <Row>
                  <Col>
                    <p className="mb-1 my-monospaced"><i className="bi bi-music-note-list"></i> Last Played</p>
                    {spotifyData && <Image src={spotifyData.image_uri} alt="Album Art" className="mb-4 mt-3 album-art-shadow album-art" rounded />}
                    <h2 className="my-monospaced">{spotifyData ? (<a className="mylink-plain-rev" href={spotifyData.external_url} target="_blank" rel="noopener noreferrer">{spotifyData.name}</a>) : '...'}</h2>
                    <div className="d-flex justify-content-start my-sans-serif">
                      <p className="mb-0 my-monospaced"><strong>By </strong>{spotifyData ? (<a className="mylink-plain-rev" href={spotifyData.artist_url} target="_blank" rel="noopener noreferrer">{spotifyData.artist}</a>) : '...'}</p>
                    </div>
                    <div className="d-flex justify-content-end my-sans-serif">
                    <p className="mb-0"><span>Powered by </span><strong><i className="bi bi-spotify"></i>
                      {' '} 
                      <a
                        className="mylink-plain" 
                        href="https://developer.spotify.com/documentation/web-api/" 
                        target="_blank" 
                        rel="noopener noreferrer">
                        Spotify
                      </a>
                    </strong></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <div ref={catfactContainerRef}>
                <Container className="my-bg-tertiary my-shadow rounded pt-4 ps-4 pe-4 pb-2 text-white" fluid>
                  <h2 className="mb-2 my-monospaced">
                    {!showCatfact &&
                    <><p>Contact Me</p>
                    {' '}
                    </>}
                    {showCatfact &&
                    <><p>Ok, here's a cat fact instead</p>
                    {' '}
                    </>}
                  </h2>
                  {!showCatfact &&
                  <>
                  <p className="my-sans-serif">I'm active on various social media platforms. Feel free to reach out.</p>
                  <div className="contact-links">
                    <a className="mylink my-monospaced" href="https://github.com/angadvirk" target="_blank" rel="noopener noreferrer">Github</a>
                    <a className="mylink my-monospaced" href="https://www.linkedin.com/in/angadvirk/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a className="mylink my-monospaced" href="https://www.instagram.com/angadsvirk/" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a className="mylink my-monospaced" href="https://twitter.com/AngadSVirk/" target="_blank" rel="noopener noreferrer">Twitter</a>
                  </div>
                  </>}
                  {showCatfact && <div className="my-sans-serif">
                    <p>{catfact ? `${catfact}` : 'Loading...'}</p>
                    {/* <p>{catfact ? catfact : 'Loading...'}</p> */}
                    {/* <p>{catfact}</p> */}
                    <p>
                      (Source: {" "}
                      <a className="mylink-plain" href="https://catfact.ninja/fact"
                      target="_blank"
                      rel="noopener noreferrer">
                        https://catfact.ninja/fact
                      </a>)
                    </p>
                  </div>}
                  <Container className="d-flex justify-content-end p-0">
                    {!showCatfact && <p
                      className="mylink-noanim my-monospaced"
                      onClick={() => {
                        setShowCatfact(true);
                        fetch("https://catfact.ninja/fact")
                          .then(response => response.json())
                          .then(data => setCatfact(data.fact));
                      }}>(I don't want to)
                    </p>}
                    {showCatfact && <p
                      className="mylink-noanim my-monospaced"
                      onClick={() => {
                        setShowCatfact(false);
                        setCatfact("");
                      }}>
                      (actually, I changed my mind)
                    </p>}
                  </Container>
                </Container>
              </div>
            </Col>
          </Row>
      </Container>
      <Footer />
    </div>
  );
}