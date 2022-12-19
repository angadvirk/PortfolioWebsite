import Container from "react-bootstrap/Container";

export default function MyNavLink(props) {
  return (
    <Container 
    className={props.type === "back" ? 
    "justify-content-start d-flex p-0" : 
    "justify-content-end d-flex p-0"} 
    fluid>
    <p 
      className="lead mylink my-monospaced"
      onClick={() => {
        props.scrollToProjects();
        if (props.type === "back") {
          props.setter(false);
        }
      }}>
      {props.text}
    </p>
    </Container>
  )
}