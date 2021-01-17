import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HeaderNavbar.css'
const HeaderNavbar = () => {  

    return ( 
        <div>
            <Navbar fixed="top" b expand="lg" style={{background:"#2d313b"}}>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-white'  />
                <Navbar.Collapse id="basic-navbar-nav">
                   <h3 class='text-white'>Ashik Mahmud</h3>
                    <Nav className="ml-auto">
                    <Nav.Link  className="my-nav-link home-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/home' ? 'rgb(81, 233, 157)':'white'}`}} to={`/home`}>
                           <h5> Home</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/about-me' ? 'rgb(81, 233, 157)':'white'}`}} to={`/about-me`}>
                           <h5>About Me</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-project' ? 'rgb(81, 233, 157)':'white'}`}} to={`/all-project`}>
                           <h5> Projects</h5>
                       </Link>
                    </Nav.Link>
                    <Nav.Link className="my-nav-link">
                        <Link style={{textDecoration:'none',color:`${window.location.pathname==='/all-blog' ? 'rgb(81, 233, 157)':'white'}`}} to={`/all-blog`}>
                             <h5>Blog</h5>
                        </Link>
                    </Nav.Link>
                    {/* <Nav.Link  className="my-nav-link">
                       <Link style={{textDecoration:'none',color:`${window.location.pathname==='/resumi' ? 'rgb(81, 233, 157)':'white'}`}} to={`/resumi`}>
                           <h5> resume</h5>
                       </Link>
        
                    </Nav.Link> */}
                    <Nav.Link  className="my-nav-link">
                    <Link style={{textDecoration:'none',color:`${window.location.pathname==='/contact-us' ? 'rgb(81, 233, 157)':'white'}`}} to={`/contact-us`}>
                           <h5> Contact</h5>
                    </Link>
                    </Nav.Link>
                          <a href="https://drive.google.com/file/d/1FXwoc2rJxh1lx3tqwL5syrsW2OBxvgro/view?usp=sharing" target="_blank"><button class="btn btn-outline-success my-2 my-sm-0" type="submit">Resume</button> </a>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default HeaderNavbar;