import React, { useRef } from 'react'
import   './Header.css'
import * as ReactBootStrap from 'react-bootstrap'



const Header = () => {

const scrollToRef = (ref) => window.scrollTo({
  top: 1480,
  left: 100,
  behavior: 'smooth'
})

    return (
        <div className='header' style={{paddingTop: '5%'}}>
    <ReactBootStrap.Navbar fixed='top'   collapseOnSelect expand="sm"  variant="dark" >
  
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="mr-auto">
      
      
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav style={{fontSize:'2rem', width:'100%', display:'flex', justifyContent:'flex-end',}}>
      
      <ReactBootStrap.Nav.Link  onClick={scrollToRef}  style={{marginRight:'5%', color:'white'}}>Projects</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link  href="About" style={{marginRight:'5%', color:'white'}}>About</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
</ReactBootStrap.Navbar>
            
        </div>
    )
}

export default Header
