import React from 'react'
import   './Header.css'
import * as ReactBootStrap from 'react-bootstrap'

const Header = () => {
    return (
        <div className='header'>
    <ReactBootStrap.Navbar collapseOnSelect expand="sm"  variant="dark">
  
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      
      
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav style={{fontSize:'2rem', width:'100%', display:'flex', justifyContent:'flex-end',}}>
      <ReactBootStrap.Nav.Link href="Homw" style={{marginRight:'5%', color:'white'}} >Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link  href="Projects" style={{marginRight:'5%', color:'white'}}>Projects</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link  href="About" style={{marginRight:'5%', color:'white'}}>About</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
            
        </div>
    )
}

export default Header
