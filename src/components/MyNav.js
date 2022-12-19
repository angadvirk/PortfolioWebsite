import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from '../assets/logo-white.png';
// import { LinkContainer } from "react-router-bootstrap";

export default function MyNav(props) {
  return (
    <Navbar ref={props.customRef} className="shadow my-bg-tertiary" collapseOnSelect expand="sm" variant="light" sticky="top">
      <Container>
        {/* <LinkContainer to="/"> */}
        <Navbar.Brand>
          {/* <a href="/"> */}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top my-logo"
            alt="Angad Virk Logo"
            onClick={() => props.scrollToTop()}
          />
          {/* </a> */}
        </Navbar.Brand>
        {/* </LinkContainer> */}
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end"> */}
        <div className="my-nav">
        <Nav.Link className="my-monospaced mylink my-nav-link" href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</Nav.Link>
        <Nav.Link className="my-monospaced mylink my-nav-link" onClick={() => {
          props.scrollToProjects();
          if (props.showArticle) {
            // to fix problem where window wasn't scrolling up if 
            // article was shown and the 'Projects' nav link was clicked while curr scroll position was way down
            setTimeout(() => {
              props.setShowAllProjects(true);
              props.setShowArticle(false);
            }, 200);
          }
          else {
            props.setShowAllProjects(true);
            props.setShowArticle(false);
          }
        }}>Projects</Nav.Link>
        <Nav.Link className="my-monospaced mylink my-nav-link" onClick={() => {
          props.scrollToSkills();
        }}>Skills</Nav.Link>
        </div>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  )
}