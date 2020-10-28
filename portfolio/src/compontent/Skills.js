import React from 'react'
import './Skills.css'
import * as ReactBootStrap from 'react-bootstrap'
import Postgres from '../img/postgresql.svg'
import Mongo from '../img/mongo.png'
import firebase from '../img/firebase.png'

const Skills = () => {
    return (
        <ReactBootStrap.Container className='skills'>
            <div className='skill-header'>
                <h1>Skills</h1>
            </div>
                <div className='skill-name'>
                    <div className='front-end'>
                        <h2 style={{color:'white', marginBottom:'2%'}}>Front-End</h2>
                        <div className="front-end-icons">
                        <i class="fab fa-html5" style={{color:'rgb(148,216,45)',fontSize: '3rem'}}></i>
                        <i class="fab fa-css3-alt" style={{color:'rgb(21,170,191)',fontSize: '3rem'}}></i>
                        <i class="fab fa-js-square" style={{color:'yellow',fontSize: '3rem'}}></i>
                        <i class="fab fa-react" style={{color:'rgb(97,219,251)',fontSize: '3rem'}}></i>
                        <i class="fab fa-bootstrap" style={{color:'rgb(86,61,124)',fontSize: '3rem'}}></i>
                        <i class="fab fa-less" style={{color:'rgb(37,78,133)',fontSize: '3rem'}}></i>

                        </div>
                    </div>
                <div className='back-end'>
                    <h2 style={{textAlign:'right', color:'white', marginBottom:'2%'}}>Back-end</h2>
                    <div className='back-end-icons'>
                    <i class="fab fa-node" style={{color:'rgb(124,183,1)',fontSize: '4rem'}} ></i>
                    
                    <img src={Postgres} alt ='postgres logo' />
                    <img src={Mongo} alt ='mongo logo' />
                    <img src={firebase} alt ='firebase logo' />
                    </div>
                </div>
            </div>
        </ReactBootStrap.Container>
    )
}

export default Skills
