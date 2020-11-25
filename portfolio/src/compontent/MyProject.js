import React, { useRef } from 'react'
import "./MyProject.css";
import * as ReactBootStrap from "react-bootstrap";
import expense from '../img/osfowe.png'
import Slack from '../img/slack-app.PNG'
import conway from '../img/conway.PNG'
import dad from '../img/dad-app.png'
import dataTable from '../img/data.PNG'



const MyProject = () => {

  
  return (

      <div>
          <div className="project-header">
        <h1>My Projects</h1>
      </div>
    <ReactBootStrap.Container className="my-project">
      <div className='projects-flex1'>
        <div className='p1'>
            
          <ReactBootStrap.Card style={{ width: "20rem", border:'none', backgroundColor: 'black' }}>
          <ReactBootStrap.Nav.Link href='https://slack-clone-5d2ef.web.app/File%20browser'>
            
            <ReactBootStrap.Card.Img variant="top" src={Slack} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:' 1px solid' }}>
              <ReactBootStrap.Card.Title>Slack App</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Slack like app, built using React, Firestore, Google Authentication, SQL
              </ReactBootStrap.Card.Text>
              <div className='button-group'>
              <ReactBootStrap.Button href="https://slack-clone-5d2ef.web.app/File%20browser" variant="primary">
                App
              </ReactBootStrap.Button>
              <ReactBootStrap.Button href="https://github.com/mrockingham/slackClone" variant="primary">
                Git
              </ReactBootStrap.Button>
              </div>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Card>

        </div>
        <div className='p2'>
        <ReactBootStrap.Card style={{ width: "20rem", border:'none', backgroundColor: 'black'  }}>
          <ReactBootStrap.Nav.Link href='https://fam-app1.vercel.app/'>
            <ReactBootStrap.Card.Img variant="top" src={expense} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid', height:'200px'  }}>
              <ReactBootStrap.Card.Title>Expence App</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text style={{paddingBottom: '10%'}}>
                Expence app, built useing React. Backend built using MongoDB.
              </ReactBootStrap.Card.Text>
              <div className='button-group'>
              <ReactBootStrap.Button variant="primary">
                App
              </ReactBootStrap.Button>
              <ReactBootStrap.Button href="https://github.com/mrockingham/fam-app1" variant="primary">
                Git
              </ReactBootStrap.Button  > 
              </div>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Card>

        </div>
        </div>
        <div className='projects-flex1'>
        <div className='p3'>
            
        <ReactBootStrap.Card style={{ width: "20rem", border:'none', height:'100%', backgroundColor: 'black', fontWeight: '900'  }}>
        <ReactBootStrap.Nav.Link href='https://conway-s-mike-s-game.vercel.app/'>
            <ReactBootStrap.Card.Img style={{height:'180px'}} variant="top" src={conway} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid', height:'200px'  }}>
              <ReactBootStrap.Card.Title >Conway Game of Life</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text>
                Conways game of life, built with React, Framer-motion, Material Ui
              </ReactBootStrap.Card.Text>
              <div className='button-group'>
              <ReactBootStrap.Button variant="primary">
                App
              </ReactBootStrap.Button>
              <ReactBootStrap.Button  href="https://github.com/mrockingham/Conway-s-mike-s-Game" variant="primary">
                Git
              </ReactBootStrap.Button>
              </div>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Card>

        </div>
        <div className='p4' >
        <ReactBootStrap.Card style={{ width: "20rem", border:'none', height:'100%', backgroundColor: 'black'  }}>
        <ReactBootStrap.Nav.Link href='https://dadsapp.vercel.app/'>
            <ReactBootStrap.Card.Img variant="top" src={dad} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid'  }}>
              <ReactBootStrap.Card.Title>Dad's Memory</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text >
                Memorial app for my DAd, built with React, Firebase, BootStrap, and Framoer-motion
              </ReactBootStrap.Card.Text>
              <div className='button-group'>
              <ReactBootStrap.Button variant="primary">
                App
              </ReactBootStrap.Button>
              <ReactBootStrap.Button href="https://github.com/mrockingham/dadsapp" variant="primary">
                Git
              </ReactBootStrap.Button>
              </div>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Card>

        </div>
        
        <div className='p5' >
        <ReactBootStrap.Card style={{ width: "20rem", border:'none', height:'100%', backgroundColor: 'black'  }}>
        <ReactBootStrap.Nav.Link href='https://d.bridgestoprosperity.dev/main'>
            <ReactBootStrap.Card.Img variant="top" src={dataTable} style={{height: '180px'}} />
            <ReactBootStrap.Card.Body style={{ color: "white", backgroundColor:'black', border:'1px solid'  }}>
              <ReactBootStrap.Card.Title>Bridges To Prosperity</ReactBootStrap.Card.Title>
              <ReactBootStrap.Card.Text >
                Group Project for a non- profit, built with Context Api, Okta, React-Map-Gl, Material UI
              </ReactBootStrap.Card.Text>
              <div className='button-group'>
              <ReactBootStrap.Button variant="primary">
                App
              </ReactBootStrap.Button>
              <ReactBootStrap.Button href="https://github.com/mrockingham/Labs28-Bridges-D-FE" variant="primary">
                Git
              </ReactBootStrap.Button>
              </div>
            </ReactBootStrap.Card.Body>
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Card>

        </div>
        </div>

      
      
    </ReactBootStrap.Container>
    </div>
  );
};

export default MyProject;
