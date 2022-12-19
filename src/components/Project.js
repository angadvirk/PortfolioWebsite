// React Bootstrap Components
import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Image from 'react-bootstrap/Image';

// import { LinkContainer } from 'react-router-bootstrap';

export default function Project(props) {
  
  return (
    <Container className="my-bg-tertiary my-shadow rounded text-white p-4 mb-4" fluid>
      {/* <div className="text-center mb-4">
      <Image className="shadow" src={require("../assets/projectImages/" + props.image)} alt={props.title + " Image"} rounded fluid/>
      </div> */}
      <h2 className="my-monospaced">{props.title}</h2>
      <p className="my-text-secondary my-bold my-monospaced mb-2">{props.date}</p>
      <p className="mb-2 my-sans-serif"><strong>{props.subtitle}</strong></p>
      <p className="my-sans-serif">{props.description}</p>
      <div className="project-links">
      {props.firstLink && <a className="my-btn-secondary" href={props.firstLink} target="_blank" rel="noopener noreferrer">
        {props.firstLinkIcon && <i className={"bi-" + props.firstLinkIcon}></i>}
        {' '}
        Repo
      </a>}
      {props.secondLink && 
      <a className="my-btn-secondary" href={props.secondLink} target="_blank" rel="noopener noreferrer">
        {props.secondLinkIcon && <i className={"bi-" + props.secondLinkIcon}></i>}
        {' '}
        {props.secondLinkName}
      </a>}
      {props.thirdLink && 
      <a className="my-btn-secondary" href={props.thirdLink} target="_blank" rel="noopener noreferrer">
        {props.thirdLinkIcon && <i className={"bi-" + props.thirdLinkIcon}></i>}
        {' '}
        {props.thirdLinkName}
      </a>}
      {/* {props.routerLink && <LinkContainer to={props.routerLink}>
        <button className="me-2 mb-2 my-btn-secondary" target="_blank" rel="noopener noreferrer">
          {props.routerLinkName}
        </button>
      </LinkContainer>} */}
      {props.articleLink && (
      <button 
      className="me-2 mb-2 my-btn-secondary" 
      target="_blank" 
      rel="noopener noreferrer"
      onClick={() => {
        props.scrollToProjects();
        props.setShowArticle(true);
      }}
      >
        {props.articleLinkName}
      </button>
      )}
      </div>
    </Container>
  )
}
