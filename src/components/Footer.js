import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Navbar className="border-top" bg="light" variant="light">
        <Container className="ps-4 pe-4" fluid>
          <Navbar.Brand>
            <Navbar.Text>© Angad Virk</Navbar.Text>
          </Navbar.Brand>
          <Nav>
            {/* <Nav.Link href="about">About</Nav.Link> */}
            <Nav.Link href="https://github.com/angadvirk" target="_blank" rel="noopener noreferrer">
              Github
            </Nav.Link>
            <Navbar.Text>•</Navbar.Text>
            <Nav.Link href="https://www.linkedin.com/in/angadvirk/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Nav.Link>
            <Navbar.Text>•</Navbar.Text>
            <Nav.Link href="https://www.instagram.com/angadsvirk/" target="_blank" rel="noopener noreferrer">
              Instagram
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}