import React from 'react';
import './Project.css'
import {FaGithub,FaExternalLinkAlt} from "react-icons/fa";
import travel from '../../../images/travel.png'
import agnecy from '../../../images/agnecy.png'
import emaJhon from '../../../images/ema-jhon.png'
import volunteer from '../../../images/volunteer.PNG'
import { Link } from 'react-router-dom';
const Project = () => {
    return (
    <div className="container mt-5">
      <div style={{ marginTop: "60px"}} id="projects">
        <h2 style={{ color: "rgb(81, 233, 157)",marginBottom:"50px" }}>
          Some Of <span className="text-white">My Project ------------||</span> <Link to='/all-project'> <button class="btn btn-outline-success my-2 my-sm-0" type="submit">See More project</button>  </Link>
        </h2>
        <div class="card-deck">
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
  <div class="card">
    <img class="card-img-top" src={travel} alt="Card image cap"/>
    <div class="card-body" style={{background:' rgb(27, 61, 93)'}}>
      <h5 style={{color: "rgb(81, 233, 157)"}}>Travel Guru</h5>
      <p class="text-white">This is a single travel guro website ,where people can select their favorite place in sreemangal, sajex and sundorbon.In this website there have been opportunities for hotels.so anyone can click if they want to stay.</p>
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
  
</div>

</div>
</div>
    );
};

export default Project;