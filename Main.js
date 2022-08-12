import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bounce from 'react-reveal/Bounce';

import '../App.css';
import '../main.css';
import Image from '../2.jpg';
// import Image1 from 'https://www.sololearn.com/Uploads/html-css.jpg';
// import Image2 from '../2.jpg';
// import Image3 from '../2.jpg';
import Aos from 'aos';
import "aos/dist/aos.css";
// import Roll from 'react-reveal/Roll';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button
} from 'reactstrap';
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";






const Main = (props) => {
  useEffect(()=>{
    Aos.init();
  })
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
    <div className="bosh">
   
      
      {/* <Navbar color="dark" dark expand="md" className="navbar">
      <Roll bottom>
  <NavbarBrand href="/" className="Logo">Juniordev.uz</NavbarBrand></Roll>
        <NavbarToggler onClick={toggle}  className="App-laa" />
        <Collapse isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/" className="nav-item" >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/portfolio" className="nav-item">Portfolio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="nav-item">Setup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap" className="nav-item">About Me</NavLink>
            </NavItem>
          </Nav>
       
        </Collapse>
      </Navbar> */}
   
      <div className="footer ">
       <div className="left" data-aos="fade-up">
        <h1>Ismim Tohirjon</h1>
        <p>Yoshim 21 da Hozirda TATU Farg'ona filiali 3-bosqich talabasiman 
           Shaxsiy portfolio saytimga hush kelibsiz</p>
           <div className="button">
           <NavLink href="/about" className="btn btn-warning button1"  data-aos="fade-right">About</NavLink>
           <NavLink href="/portfolio"  className="btn btn-danger button1" data-aos="fade-left">Portfolio</NavLink>
           </div>
       </div>
       <div className="right">
        <img src={Image}></img>

        <div className="messen">
    <NavLink className="nav-i" href="https://www.youtube.com/channel/UCq9BiGWmrOywkX6KIpOEgIA/featured"> <FaYoutube/></NavLink>
     <NavLink className="nav-i" href="https://t.me/frontend_devoloper0203"> <FaTelegramPlane/></NavLink>
     <NavLink className="nav-i" href=""> <FaInstagram/></NavLink>
       </div>
      </div>
       </div>
       
       <h2 align="center"
       style={{
         marginTop:"100px"
       }}
       data-aos="flip-left"
       >Fullstack Texnologiyalar</h2>   
       
   <div className="main_react"   style={{
         marginTop:"50px"
       }}>
         
   
   <div className="left_main">
     <img  src="https://www.sololearn.com/Uploads/html-css.jpg" width="100%" data-aos="flip-up"/>
     <h4 data-aos="fade-up"
        style={{
          marginTop:'20px'
        }}
     >Frontend texnologiyalar</h4>
     <p data-aos="fade-up">Html5 Css3 Bootstrap Sass Less</p>
     <NavLink href='/setup' className="btn btn-light" data-aos="fade-up"
     style={{
       width:"100%",
       color:"black",
       fontSize:20

       
     }}
     >Batafsil</NavLink>
   </div>
      <div className="center_main">
      <img data-aos="fade-right" width="100%" height="190px" src="https://blog.logrocket.com/wp-content/uploads/2020/06/javascript-concepts-before-learning-react.jpg" />
      <h4
      style={{
        marginTop:'20px'
      }}
      data-aos="fade-up">Frontend dasturlash</h4>
     <p data-aos="fade-up">Javascript Reactjs Vue js Angular</p>
     <NavLink data-aos="fade-up" href='/setup' className="btn btn-light"
     style={{
       width:"100%",
       color:"black",
       fontSize:20

       
     }}
     >Batafsil</NavLink>
      </div>
      <div className="right_main">
      <img data-aos="fade-left" width="100%" src="https://media.proglib.io/wp-uploads/2018/07/d342e70b000d2961a2932.png" />
      <h4 data-aos="fade-up"
         style={{
          marginTop:'20px'
        }}
      >Backend dasturlash</h4>
     <p data-aos="fade-up">Php Mysql Yii2 php frameworki</p>
     <NavLink data-aos="fade-up" href='/setup' className="btn btn-light"
     style={{
       width:"100%",
       color:"black",
       fontSize:20

       
     }}
     >Batafsil</NavLink>
      </div>
   </div>
   
    </div>

    </Router>
  );
}

export default Main;

