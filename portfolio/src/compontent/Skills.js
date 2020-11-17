
import React, { useRef, useLayoutEffect, useEffect } from "react";

import "./Skills.css";
import * as ReactBootStrap from "react-bootstrap";
import Postgres from "../img/postgresql.svg";
import Mongo from "../img/mongo.png";
import firebase from "../img/firebase.png";
import { motion, useAnimation,
    useViewportScroll  } from "framer-motion";
    import { useInView } from 'react-intersection-observer';

 const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
           
          staggerChildren: 0.2
          }
        }
      }
    const container2 = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerDirection: -1,
          staggerChildren: 0.3
          }
        }
      }
       
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }
const Skills = () => {
    const controls = useAnimation();
    const { scrollY, scrollYProgress } = useViewportScroll();
    const [ref, inView] = useInView({
        threshold: 1,
      })

console.log(inView)

useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
   
  return (
    <ReactBootStrap.Container className="skills">
      <div 
      className="skill-header"
      inView={inView}
      
      >
        <h1>Skills</h1>
      </div>
      <div className="skill-name">
        <div className="front-end">
          <h2
           style={{ color: "white", marginBottom: "2%" }}>Front-End</h2>
          <motion.div
          ref={ref}
          className="front-end-icons"
          animate={controls}
          initial="hidden"
            variants={inView === true?container:container}
            
            >
            <motion.i
              class="fab fa-html5"
              style={{ color: "rgb(148,216,45)", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
            <motion.i
              class="fab fa-css3-alt"
              style={{ color: "rgb(21,170,191)", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
            <motion.i
              class="fab fa-js-square"
              style={{ color: "yellow", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
            <motion.i
              class="fab fa-react"
              style={{ color: "rgb(97,219,251)", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
            <motion.i
              class="fab fa-bootstrap"
              style={{ color: "rgb(86,61,124)", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
            <motion.i
              class="fab fa-less"
              style={{ color: "rgb(37,78,133)", fontSize: "3rem" }}
              variants={item}
            ></motion.i>
          </motion.div>
        </div>
        <div className="back-end">
          <h2
            style={{ textAlign: "right", color: "white", marginBottom: "2%" }}
          >
            Back-end
          </h2>
          <motion.div
           
           className="back-end-icons"
           variants={container2}
           animate={controls}
           initial="hidden"
           >
            <motion.i
              class="fab fa-node"
              style={{ color: "rgb(124,183,1)", fontSize: "4rem" }}
              variants={item}
            ></motion.i>

            <motion.img
            variants={item}
             src={Postgres} alt="postgres logo" />
            <motion.img
            variants={item}
            src={Mongo} alt="mongo logo" />
            <motion.img
            variants={item}
            src={firebase} alt="firebase logo" />
          </motion.div>
        </div>
      </div>
    </ReactBootStrap.Container>
  );
};

export default Skills;
