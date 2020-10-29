import React from "react";
import "./MyProject.css";
import * as ReactBootStrap from "react-bootstrap";
import expense from '../img/osfowe.png'

const MyProject = () => {
  return (

      <div>
          <div className="project-header">
        <h1>My Projects</h1>
      </div>
    <ReactBootStrap.Container className="my-project">
      <div className='projects-flex1'>
        <div className='p1'>
            
          <ReactBootStrap.Card style={{ width: "20rem", border:'none' }}>
            <ReactBootStrap.Card.Img variant="top" src={expense} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:' 1px solid' }}>
              <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">
                Go somewhere
              </ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

        </div>
        <div className='p2'>
        <ReactBootStrap.Card style={{ width: "20rem", border:'none'  }}>
            <ReactBootStrap.Card.Img variant="top" src={expense} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid'  }}>
              <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">
                Go somewhere
              </ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

        </div>
        </div>
        <div className='projects-flex1'>
        <div className='p3'>
            
        <ReactBootStrap.Card style={{ width: "20rem", border:'none'  }}>
            <ReactBootStrap.Card.Img variant="top" src={expense} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid'  }}>
              <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">
                Go somewhere
              </ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

        </div>
        <div className='p4'>
        <ReactBootStrap.Card style={{ width: "20rem", border:'none'  }}>
            <ReactBootStrap.Card.Img variant="top" src={expense} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid'  }}>
              <ReactBootStrap.Card.Title>Card Title</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </ReactBootStrap.Card.Text>
              <ReactBootStrap.Button variant="primary">
                Go somewhere
              </ReactBootStrap.Button>
            </ReactBootStrap.Card.Body>
          </ReactBootStrap.Card>

        </div>
        </div>

      
      
    </ReactBootStrap.Container>
    </div>
  );
};

export default MyProject;
