import React from 'react';
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
import travel from '../../images/travel.png'
import agnecy from '../../images/agnecy.png'
import emaJhon from '../../images/ema-jhon.png'
import Course from "../../images/course.png";
import eSchool from "../../images/e-school.png"
import song from "../../images/song.png"
import protpolio from "../../images/protolio.png"
import personal from "../../images/personal.png"
import hotGajeds from "../../images/hot.png"
import panda from '../../images/panda.png'
import animation from '../../images/animation.gif'
import aph from '../../images/aph.PNG'
import athena from '../../images/athena.PNG'
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";
import volunteer from '../../images/volunteer.PNG'

const AllProject = () => {
    return (
         <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
             <HeaderNavbar></HeaderNavbar>
            <div className="container">
            <div style={{ marginTop: "60px"}} id="projects">
        <h1 style={{ color: "rgb(81, 233, 157)", textAlign: "center",marginBottom:"80px",paddingTop:"50px" }}>
          Some Of <span className="text-white">My Project</span>
        </h1>
        <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src={travel} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Travel Guru</h5>
      <p class="text-white">This is a single travel guru website ,where people can select their favorite place in sreemangal, sajex and sundorbon.In this website there have been opportunities for hotels.so anyone can click if they want to stay.</p>
      <div className="technolog">
      <span >React.js</span> <span >javascript</span> <span className='technology'>css</span> <span>Bootstrap</span><span >Material Ui</span>  <span>Firebase-auth</span><br/><br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/react-js-travel_Place_hotel_Search"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://travel-guru-ashik.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={agnecy} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Creative Agency</h5>
      <p class="text-white">A single web application with different dashboard for admin and client. only admin can show all details and can be accessed. And can be of any order and review if he wishes.</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css</span> <span>Bootstrap</span> <br/> <br/> <span>Material Ui</span>  <span>Firebase-auth</span>  <span>MongoDB</span><br/><br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/node-react-agency-client"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://creative-agency-f33d5.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={Course} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Online Course</h5>
      <p class="text-white">This is a online courses web application. user can be see the curses template price and title, and also if he want to course you will cllick the enroll button.</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css</span> <span>Bootstrap</span> <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/js-react-onlineCourses"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://online-course-udemy.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
</div>

<br/>

<div class="card-deck">
  
  <div class="card">
    <img class="card-img-top" src={song} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Hard rock master</h5>
      <p class="text-white">This is my first javascript project. User can search the any song,and also he can see the song relize.</p> 
        <div className="technolog">
        <span>javascript</span> <span>css</span> <span>Bootstrap</span> <br/><br/>
        </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/apicall_songLyrics_js"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://ashik927.github.io/apicall_songLyrics_js/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={volunteer} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Volunteer Work</h5>
      <p class="text-white">This project is about volunteer activites. Any person can add volunteer activity. In this project admin can add or delete any activity.</p>
      <div className="technolog">
      <span>React.js</span> <span>javascript</span> <span>css</span> <span>Bootstrap</span> <br/> <br/> <span>Material Ui</span>  <span>Firebase-auth</span>  <span>MongoDB</span><br/><br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/react-node-volunteer-network"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://volunteer-network-ashik.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  {/* <div class="card">
    <img class="card-img-top" src={eSchool} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>E-learning</h5>
      <p class="text-white">this is a awesome one page responsive e-learning school web application design.this website will be support deskop laptop and all another site.</p>
      <div className="technolog">
      <span>html</span> <span >css</span> <span>Bootstrap4</span> <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/Toushiat96/e-school"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://toushiat96.github.io/e-school/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src={panda} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>E-learning</h5>
      <p class="text-white"> Simple e-commerce website using html ,css and bootstrap.Here show how product display in e-commerce website .Customer can easily choice their products.</p>
      <div className="technolog">
      <span>html</span> <span >css</span> <span>Bootstrap4</span> <br/> <br/>
      </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/Toushiat96/panda-commerce"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://toushiat96.github.io/panda-commerce/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>*/}
</div> 

<br/>

<div class="card-deck">
  
 
  {/* <div class="card">
    <img class="card-img-top" src={hotGajeds} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Hot Gageds</h5>
      <p class="text-white">This is a one page pantastic responsive e-commerce web application. Users can see the different types of product.exanple laptop,mobile,bag.show</p>
       <div className="technolog">
       <span >html</span> <span >css</span> <span>Bootstrap4</span> <br/> <br/>
       </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/Toushiat96/hot-gadgets"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://toushiat96.github.io/hot-gadgets/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div> */}
  <div class="card">
  <img class="card-img-top" src={aph} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Apartment Rent</h5>
      <p class="text-white">Apartment Hunt is rent based project.Where any one can rent their house to rent . If any one can book house he can see all person who booking.</p>
       <div className="technolog">
       <span >html</span> <span >css</span> <span>Bootstrap4</span> <span>Reactjs</span>  <span>Material Ui</span>  <span>Firebase-auth</span> <br/> <br/>
       </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/apartment-hunt"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://apartment-hunt-prac.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
  <div class="card">
  <img class="card-img-top" src={athena} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Athena Design</h5>
      <p class="text-white">This design is landing page of it firm .Where provided different types of course. </p>
       <div className="technolog">
       <span >html</span> <span >css</span> <span>Bootstrap4</span> <br/> <br/>
       </div>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://github.com/ashik927/athena-design"><FaGithub></FaGithub></a>
       <a style={{fontSize:'20px',color:'white',paddingRight:'30px'}}  href="https://athena-design-s.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
    </div>
  </div>
</div>
      </div>
     <a href="https://github.com/ashik927:"> <h1>For See Many Project Visit my Github Account.</h1></a>
      <h5 className="text-center text-white pb-5 pt-5">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>Ashik Mahmud</span></h5>
            </div>
        </div>
    );
};

export default AllProject;