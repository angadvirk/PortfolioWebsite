import { useLayoutEffect } from "react";

// Components
import MyNav from "../components/MyNav";
import Footer from "../components/Footer";

// React Bootstrap Components
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

export default function Article(props) {

  useLayoutEffect(() => {
    window.scrollTo(0, 0) // scroll to top when route opened
  });

  return (
    <div>
      <MyNav />
      <Container className="bg-secondary p-5" fluid>
        <Container className="bg-white shadow rounded text-default p-4 mb-4" fluid>
          {/* Article Header */}
          <Container className="text-center">
          <h1 className="display-2 mb-3">Travel Stories</h1>
          <h4 className="mb-3">The surprisingly simple idea that won a hackathon</h4>
          <p className="lead text-muted">July 2022 ~ Software Development</p>
          </Container>
          {/* Article Content */}
          <h4>The Idea</h4>
          <p>
            The idea was simple, and it was proposed to our team by Anuj Kumar. Since the 
            hackathon's theme was 'travel', Anuj proposed that we create an app that allows 
            users to easily create a 'story' from pictures taken during a trip.
          </p>
          <p>
            The user would click on a button to 'create a story', and be asked to upload pictures.
            They could do this by uploading them from their computer (web version) or selecting
            them from their photo gallery (mobile version). 
          </p>  
          <Container className="p-4 text-center">
            <div className="d-none d-lg-block">
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-0.png")} alt="Create a Story" rounded fluid/>
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-1.png")} alt="Upload Photos" rounded fluid/>
            </div>
            <div className="d-none d-md-block d-lg-none">
              <Image className="shadow-sm w-50 m-3" src={require("../assets/article-0.png")} alt="Create a Story" rounded fluid/>
              <Image className="shadow-sm w-50 m-3" src={require("../assets/article-1.png")} alt="Upload Photos" rounded fluid/>
            </div>
            <div className="d-md-none">
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-0.png")} alt="Create a Story" rounded fluid/>
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-1.png")} alt="Upload Photos" rounded fluid/>
            </div>
          </Container>
          <p>
            Once the pictures were selected,
            the app would automatically extract metadata from the pictures and find out 
            the geographic location of the trip (it would do this by analyzing the metadata
            of all the pictures and selecting the most frequent location found to be 
            the trip's location).
          </p>
          <Container className="p-4 text-center">
            <div className="d-none d-lg-block">
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-2.png")} alt="Trip List" rounded fluid/>
            </div>
            <div className="d-none d-md-block d-lg-none">
            <Image className="shadow-sm w-50 m-3" src={require("../assets/article-2.png")} alt="Trip List" rounded fluid/>
            </div>
            <div className="d-md-none">
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-2.png")} alt="Trip List" rounded fluid/>
            </div>
          </Container>
          <p>
            After this, users would be able to flesh out their trip details by adding 
            information like 'hotels stayed at', 'activities', etc.
          </p>
          <Container className="p-4 text-center">
            <div className="d-none d-lg-block">
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-3.png")} alt="Trip Blank" rounded fluid/>
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-4.png")} alt="Trip Filled" rounded fluid/>
            </div>
            <div className="d-none d-md-block d-lg-none">
            <Image className="shadow-sm w-50 m-3" src={require("../assets/article-3.png")} alt="Trip Blank" rounded fluid/>
            <Image className="shadow-sm w-50 m-3" src={require("../assets/article-4.png")} alt="Trip Filled" rounded fluid/>
            </div>
            <div className="d-md-none">
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-3.png")} alt="Trip Blank" rounded fluid/>
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-4.png")} alt="Trip Filled" rounded fluid/>
            </div>
          </Container>
          <p>
            The rationale was that this 'travel story' feature could be integrated into the existing MakeMyTrip app
            in order to stimulate additional user engagement with the app. As incentive, we could offer users rewards if other users saw their 'travel stories' and booked tickets to the same destinations / stayed in the same hotels / did the same activites.
          </p>
          <Container className="p-4 text-center">
            <div className="d-none d-lg-block">
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-5.png")} alt="Sharing Trip" rounded fluid/>
            </div>
            <div className="d-none d-md-block d-lg-none">
            <Image className="shadow-sm w-50 m-3" src={require("../assets/article-5.png")} alt="Sharing Trip" rounded fluid/>
            </div>
            <div className="d-md-none">
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-5.png")} alt="Sharing Trip" rounded fluid/>
            </div>
          </Container>
          <h4>The Team</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/anuj-kumar-29976b3b/" target="_blank" rel="noopener noreferrer">Anuj Kumar</a> -- Ideation, Product Features, and Presentation</li>
            <li><a href="https://www.linkedin.com/in/ankit-singh-bb56aa118/" target="_blank" rel="noopener noreferrer">Ankit Singh</a> -- Backend (Node.js and Firebase)</li>
            <li><a href="https://www.linkedin.com/in/pawan-kumar-430951111/" target="_blank" rel="noopener noreferrer">Pawan Kumar</a> -- Frontend and Backend (Swift and Firebase)</li>
            <li>Angad Virk (Me) -- Frontend (React, CSS)</li>
            <li><a href="https://www.linkedin.com/in/maulika-lisa-05b4b1131/" target="_blank" rel="noopener noreferrer">Maulika Lisa</a> -- UI Design</li>
          </ul>
          <h4>The App</h4>
          <p>
            <strong>The Frontend:</strong> The app's frontend was designed largely by Maulika Lisa and implemented in code by me (Angad Virk) using React, and styled using plain CSS (I elected not to use styled-components due to the time constraints of the hackathon).
          </p>
          <p>
            <strong>The Backend:</strong> The backend was built by Ankit Singh and Pawan Kumar using Node.js and Firebase. The user's trips were stored in the Firebase database, and requests were routed from the frontend through the Node.js server to the Firebase database.
          </p>
          <h4>The Result</h4>
          <p>
            After two rounds of presentations and a day or two of waiting, our team (named the 'Bit Lords') got the message that we had come in First Place out of the 30 teams that participated. 
          </p>
          <Container className="p-4 text-center">
            <div className="d-none d-lg-block">
            <Image className="shadow-sm w-25 m-3" src={require("../assets/article-6.jpg")} alt="Hackathon Winners" rounded fluid/>
            </div>
            <div className="d-none d-md-block d-lg-none">
            <Image className="shadow-sm w-50 m-3" src={require("../assets/article-6.jpg")} alt="Hackathon Winners" rounded fluid/>
            </div>
            <div className="d-md-none">
            <Image className="shadow-sm w-75 m-3" src={require("../assets/article-6.jpg")} alt="Hackathon Winners" rounded fluid/>
            </div>
          </Container>
        </Container>
      </Container>
      <Footer />
    </div>
  )
}