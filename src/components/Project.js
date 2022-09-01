// React Bootstrap Components
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

// React Router Bootstrap
import { LinkContainer } from 'react-router-bootstrap';

export default function Project(props) {
  
  return (
    <Container className="bg-white shadow rounded text-default p-4 mb-4" fluid>
      <div className="text-center mb-4">
      <Image className="shadow" src={require("../assets/" + props.image)} alt={props.title + " Image"} rounded fluid/>
      </div>
      <h2>{props.title}</h2>
      <p className="text-muted mb-2">{props.date}</p>
      <p className="mb-2"><strong>{props.subtitle}</strong></p>
      <p>{props.description}</p>
      {props.firstLink && <Button variant="outline-secondary" className="me-2 mb-2" href={props.firstLink} target="_blank" rel="noopener">
        {props.firstLinkIcon && <i className={"bi-" + props.firstLinkIcon}></i>}
        {' '}
        Repo
      </Button>}
      {props.secondLink && <Button variant="outline-secondary" className="me-2 mb-2" href={props.secondLink} target="_blank" rel="noopener noreferrer">
        {props.secondLinkIcon && <i className={"bi-" + props.secondLinkIcon}></i>}
        {' '}
        {props.secondLinkName}
      </Button>}
      {props.thirdLink && <Button variant="outline-secondary" className="me-2 mb-2" href={props.thirdLink} target="_blank" rel="noopener noreferrer">
        {props.thirdLinkIcon && <i className={"bi-" + props.thirdLinkIcon}></i>}
        {' '}
        {props.thirdLinkName}
      </Button>}
      {props.routerLink && <LinkContainer to={props.routerLink}>
        <Button variant="outline-secondary" className="me-2 mb-2" target="_blank" rel="noopener noreferrer">
          {props.routerLinkName}
        </Button>
      </LinkContainer>}
    </Container>
  )
}
