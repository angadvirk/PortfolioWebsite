import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer() {
  return (
    <Navbar className="my-bg-tertiary">
        <Container className="ps-4 pe-4" fluid>
          {/* <Navbar.Brand className="d-sm-none">
            <Navbar.Text className="text-white my-sans-serif fs-6">© Angad Virk</Navbar.Text>
          </Navbar.Brand> */}
          {/* <Navbar.Brand className="d-none d-sm-block"> */}
          <Navbar.Brand>
            <Navbar.Text className="text-white my-sans-serif">© Angad Virk</Navbar.Text>
          </Navbar.Brand>

          <Nav className="d-none d-md-flex">
            {/* <Nav.Link href="about">About</Nav.Link> */}
            <Nav.Link className="my-monospaced mylink" href="https://github.com/angadvirk" target="_blank" rel="noopener noreferrer">
              Github
            </Nav.Link>
            <Navbar.Text className="text-white my-monospaced">•</Navbar.Text>
            <Nav.Link className="my-monospaced mylink" href="https://www.linkedin.com/in/angadvirk/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Nav.Link>
            <Navbar.Text className="text-white my-monospaced">•</Navbar.Text>
            <Nav.Link className="my-monospaced mylink" href="https://www.instagram.com/angadsvirk/" target="_blank" rel="noopener noreferrer">
              Instagram
            </Nav.Link>
          </Nav>

          <Nav className="d-md-none">
            {/* <Nav.Link href="about">About</Nav.Link> */}
            <Nav.Link className="my-monospaced mylink" href="https://github.com/angadvirk" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-github"></i>
            </Nav.Link>
            <Navbar.Text className="text-white my-monospaced">•</Navbar.Text>
            <Nav.Link className="my-monospaced mylink" href="https://www.linkedin.com/in/angadvirk/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </Nav.Link>
            <Navbar.Text className="text-white my-monospaced">•</Navbar.Text>
            <Nav.Link className="my-monospaced mylink" href="https://www.instagram.com/angadsvirk/" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </Nav.Link>
          </Nav>

        </Container>
      </Navbar>
  )
}