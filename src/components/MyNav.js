import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../assets/logo.png';

export default function MyNav(props) {
  return (
    <Navbar ref={props.customRef} className="shadow-sm" collapseOnSelect expand="sm" bg="light" variant="light" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Angad Virk Logo"
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/assets/resume.pdf" target="_blank" rel="noopener noreferrer">Resumé</Nav.Link>
          <LinkContainer to="/projects"><Nav.Link>Projects</Nav.Link></LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}