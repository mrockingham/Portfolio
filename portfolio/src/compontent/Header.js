import React, { useRef } from 'react';
import './Header.css';
import * as ReactBootStrap from 'react-bootstrap';

const Header = () => {
  const scrollToRef = ref =>
    window.scrollTo({
      top: 1480,
      left: 100,
      behavior: 'smooth',
    });

  return (
    <div className="header" style={{ paddingTop: '5%' }}>
      <ReactBootStrap.Navbar
        fixed="top"
        collapseOnSelect
        expand="sm"
        // variant="dark"
        style={{ backgroundColor: `rgb(${0}, ${0}, ${0}, ${0.4})` }}
      >
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="mr-auto"></ReactBootStrap.Nav>
          <ReactBootStrap.Nav
            style={{
              fontSize: '2rem',
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <ReactBootStrap.Nav.Link
              onClick={scrollToRef}
              style={{ marginRight: '5%', color: 'white' }}
            >
              Projects
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              href="https://docs.google.com/document/d/1KPUMMgg27TQGrf_xddJFV2siCKHmHAXTMO3KJcuwh20/edit?usp=sharing"
              style={{ marginRight: '5%', color: 'white' }}
            >
              Resume
            </ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link
              href="About"
              style={{ marginRight: '5%', color: 'white' }}
            >
              About
            </ReactBootStrap.Nav.Link>
          </ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Header;
