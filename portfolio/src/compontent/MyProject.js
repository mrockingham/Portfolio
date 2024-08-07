import React, { useRef } from 'react';
import './MyProject.css';
import * as ReactBootStrap from 'react-bootstrap';
import expense from '../img/osfowe.png';
import Slack from '../img/slack-app.PNG';
import conway from '../img/conway.PNG';
import dad from '../img/dad-app.png';
import dataTable from '../img/data.PNG';
import amazonClone from '../img/amazonclone.PNG';
import HRF from '../img/hrfpic.PNG';
import deverNotes from '../img/devernotemain2.png';
import protectedhome from '../img/protecedhome.PNG';
import travelblog from '../img/travelblosmain.png';

const MyProject = () => {
  const backColor = '#ffffff0e';
  const oBackColor = backColor + '33';

  return (
    <div>
      <div className="project-header">
        <h1>My Projects</h1>
      </div>
      <ReactBootStrap.Container className="my-project">
        <div className="projects-flex1">
          <div className="p1">
            <div
              className="p1-card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div>
                <a href="https://devernote.com">
                  <img
                    className="p1-image"
                    variant="top"
                    src={deverNotes}
                    alt="Developer landing page"
                  />
                </a>
                <div className="p1-body">
                  <h2 className="p1-title">DeVerNotes</h2>
                  <h3 className="p1-info">
                    An app to save, practice and develop coding skills. NextJs,
                    OAuth, TypeScript, Chakra-ui, NodeJs, MongoDB,Jwt
                  </h3>
                  <div className="p1-button-group">
                    <a
                      className="p1-button1"
                      href="https://devernote.com"
                      variant="primary"
                    >
                      App
                    </a>
                    <a
                      className="p1-button2"
                      href="https://github.com/mrockingham/human-rights-first-be-a"
                      variant="primary"
                    >
                      Git
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p1">
            <div className="p1-card">
              <a href="https://travel-blog-front.vercel.app/">
                <img
                  className="p1-image"
                  variant="top"
                  src={travelblog}
                  alt="Travel Blog home page"
                />
              </a>
              <div className="p1-body">
                <h2 className="p1-title">CMS Travel-Blog</h2>
                <h3 className="p1-info">
                  Travel update, pictures, content, and UI through the app.
                  React, TypeScript, Chakra-ui, NodeJs, MongoDB, AppWrite
                </h3>
                <div className="p1-button-group">
                  <a
                    className="p1-button1"
                    href="https://travel-blog-front.vercel.app/"
                    variant="primary"
                  >
                    App
                  </a>
                  <a
                    className="p1-button2"
                    href="https://github.com/mrockingham/human-rights-first-be-a"
                    variant="primary"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="p1">
            <div className="p1-card">
              <a href="https://a.humanrightsfirst.dev/">
                <img
                  className="p1-image"
                  variant="top"
                  src={HRF}
                  alt="human rights first website screenshot"
                />
              </a>
              <div className="p1-body">
                <h2 className="p1-title">Police Brutality Tracker</h2>
                <h3 className="p1-info">
                  Tracking app built while working with the Human Rights First
                  org. React, Ant-Design, MapBox, Docker, NodeJs, SQL
                </h3>
                <div className="p1-button-group">
                  <a
                    className="p1-button1"
                    href="https://a.humanrightsfirst.dev/"
                    variant="primary"
                  >
                    App
                  </a>
                  <a
                    className="p1-button2"
                    href="https://github.com/mrockingham/human-rights-first-be-a"
                    variant="primary"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="p1">
            <div className="p1-card">
              <a href="https://clone-72250.firebaseapp.com/">
                <img
                  className="p1-image"
                  alt="amazon clone screenshot"
                  variant="top"
                  src={amazonClone}
                />
              </a>
              <div className="p1-body">
                <h2 className="p1-title">Amazon Clone</h2>
                <h3 className="p1-info">
                  Amazon like app, built with React, Context-Api, Material-ui,
                  Google Firebase and Authentication.
                </h3>
                <div className="p1-button-group">
                  <a
                    href="https://clone-72250.firebaseapp.com/"
                    className="p1-button1"
                    variant="primary"
                  >
                    App
                  </a>
                  <a
                    className="p1-button2"
                    href="https://github.com/mrockingham/Amazonclone"
                    variant="primary"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div> */}

          <div className="p1">
            <div className="p1-card">
              <a href="https://conway-s-mike-s-game.vercel.app/">
                <img
                  className="p1-image"
                  variant="top"
                  src={conway}
                  alt="Conways game of life screenshot"
                />
              </a>
              <div className="p1-body" style={{ paddingBottom: '5%' }}>
                <h2 className="p1-title">Conway Game of Life</h2>
                <h3 className="p1-info">
                  Conways game of life, built with React, Framer-motion,
                  Material Ui
                </h3>
                <div className="p1-button-group">
                  <a
                    className="p1-button1"
                    href="https://conway-s-mike-s-game.vercel.app/"
                  >
                    App
                  </a>
                  <a
                    className="p1-button2"
                    href="https://github.com/mrockingham/Conway-s-mike-s-Game"
                    variant="primary"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p1">
            <div className="p1-card">
              <a href="https://dadsapp.vercel.app/">
                <img
                  className="p1-image"
                  alt="Dads app screenshot"
                  variant="top"
                  src={dad}
                />
              </a>
              <div className="p1-body 2">
                <h2 className="p1-title">Dad's Memory</h2>
                <h3 className="p1-info">
                  Memorial app for my Dad, built with React, Firebase,
                  BootStrap, and Framoer-motion
                </h3>
                <div className="p1-button-group">
                  <a className="p1-button1" href="https://dadsapp.vercel.app/">
                    App
                  </a>
                  <a
                    className="p1-button2"
                    href="https://github.com/mrockingham/dadsapp"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="p1">
            <div className="p1-card">
              <a href="https://labs28-bridges-d-fe.vercel.app/main">
                <img
                  className="p1-image"
                  alt="bridges for prosperity"
                  src={dataTable}
                />
              </a>
              <div className="p1-body">
                <h2 className="p1-title">Bridges To Prosperity</h2>
                <h3 className="p1-info">
                  Group Project for a non- profit, built &nbsp; with Context
                  Api, Okta, React-Map-Gl, Material UI
                </h3>
                <div className="p1-button-group">
                  <a
                    className="p1-button1"
                    href="https://labs28-bridges-d-fe.vercel.app/data"
                  >
                    {' '}
                    App
                  </a>

                  <a
                    className="p1-button2"
                    href="https://labs28-bridges-d-fe.vercel.app/data"
                    variant="primary"
                  >
                    Git
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactBootStrap.Container>
    </div>
  );
};

export default MyProject;
