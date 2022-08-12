import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import './main.css';

import Aos from 'aos';
import "aos/dist/aos.css";
import Roll from 'react-reveal/Roll';
import Fade from 'react-reveal/Fade';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  

  Button
} from 'reactstrap';
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import { useHistory  } from "react-router-dom";
import Portfolio from './Components/Portfolio';
import Main from './Components/Main';
import About from './Components/About';
import Login from './Components/Login';
import Register from './Components/Register';
import AddProduct from './Components/AddProduct';
import UpdateProduct from './Components/UpdateProduct';
import Protected from './Protected';
import ProductList from './Components/ProductList';
import SearchProduct from './Components/SearchProduct';





function App () {
  useEffect(()=>{
    Aos.init();
  })
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);



let user = JSON.parse(localStorage.getItem('user-info'));

const history = useHistory();

 function logOut()
{
      localStorage.clear();
      
 
      
}


  return (
    <Router>
    <div className="head">
   
      
      <Navbar color="dark" dark expand="md" className="navbar">
      <Roll bottom>
  <Link to="/" className="Logo">Juniordev.uz</Link></Roll>
        <NavbarToggler onClick={toggle}  className="App-laa" />
        <Collapse isOpen={isOpen} navbar >
   
          <Nav className="mr-auto" navbar>
          
            {/* <NavItem>
              <Link to="/" className="nav-item" >Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/portfolio" className="nav-item">Portfolio</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-item">Setup</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-item">About Me</Link>
            </NavItem> */}

            {
              
              localStorage.getItem('user-info') ? 
              <>
              
              <NavItem>
              <Link to="/add" className="nav-item">AddProduct</Link>
            </NavItem>
            <NavItem>
              <Link to="/update" className="nav-item">UpdateProduct</Link>
            </NavItem>
            <NavItem>
              <Link to="/search" className="nav-item">SearchProduct</Link>
            </NavItem>
          
              </>
              :
              <>
              <NavItem>
              <Link to="/login" className="nav-item">Login</Link>
            </NavItem>
            <NavItem>
              <Link to="/register" className="nav-item">Register</Link>
            </NavItem>
              </>
              
            } 
           
            {localStorage.getItem('user-info') ?
           <NavItem>
              <a  className="nav-item" onClick={logOut} >Logout ({user.name})</a>
            </NavItem>
            :null  
          }
            </Nav>
       
        </Collapse>
       
      </Navbar>
      
      <Switch>
          <Route path="/" exact>
          <Main/>
          </Route>
          <Route path="/portfolio" exact>
          <Portfolio/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/about" exact>
            <About/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/register" exact>
            <Register/>
          </Route>
          <Route path="/add" exact>
            <Protected Cmp={AddProduct}/>
          </Route>
          <Route path="/update/:id" exact>
            <Protected Cmp={UpdateProduct}/>
          </Route>

          <Route path="/product" exact>
            <Protected Cmp={ProductList}/>
          </Route>
          <Route path="/search" exact>
            <Protected Cmp={SearchProduct}/>
          </Route>
        </Switch>

        <footer className="app_footer">
        <h5>All Rights Reserved 2021</h5>

        <p>Web site powered by Oripov Tohirjon</p>
        </footer>
    </div>

    </Router>
  );
}

export default App;