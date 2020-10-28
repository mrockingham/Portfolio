import React from 'react'
import './main.css'
import * as ReactBootStrap from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Profilepic from '../img/mepinkshirt.jpg'

const Main = () => {
    return (
        <div className='main-body'>
            <ReactBootStrap.Container className = 'main-contaner' >
            <ReactBootStrap.Row >
                <ReactBootStrap.Col className= 'sec-1'>  
                    <h1 className='sec-hi'>Hi,</h1>
                    <h2 className='sec-body'>My name is Michael Rockingham. I'm a full-Stack Developoer based out of Orlando, looking to build great projects.
                    </h2>
                    <ReactBootStrap.Nav  className='sec-social'>
                       <ReactBootStrap.Nav.Link href="https://github.com/mrockingham">
                            <i class="fab fa-github" style={{fontSize: '2rem', color: 'white'}}></i>
                        </ReactBootStrap.Nav.Link>

                        <ReactBootStrap.Nav.Link href='mailto:mikeydes@gmail.com'>
                            <i class="far fa-envelope" style={{fontSize: '2rem', color: 'white'}}></i>
                        </ReactBootStrap.Nav.Link>

                        <ReactBootStrap.Nav.Link href='https://www.linkedin.com/in/michael-rockingham-b86629164/'>
                        <i class="fab fa-linkedin" style={{fontSize: '2rem', color: 'white'}}></i>
                        </ReactBootStrap.Nav.Link>

                    </ReactBootStrap.Nav>
                    <h1 className='sec-bottom'><i class="fas fa-angle-double-down" style={{fontSize: '3rem', color: 'white'}}></i></h1>
                </ReactBootStrap.Col>
                <ReactBootStrap.Col className= 'sec-2'  >
                    
                    <div className='profile-pic' >
                    <Image className='pic' src= {Profilepic} roundedCircle   />
                    </div>
                </ReactBootStrap.Col>
               </ReactBootStrap.Row> 
               <ReactBootStrap.Row>
                   <ReactBootStrap.Col>
                   
                   </ReactBootStrap.Col>
               </ReactBootStrap.Row>
             
                
            
            </ReactBootStrap.Container>
        </div>
    )
}

export default Main
