import React from 'react';
import shahadat from "../../../shahadat.jpg"
import HeaderNavbar from '../HeaderNavbar/HeaderNavbar';
import './Resumi.css'
import animation from "../../../images/animation.gif"
const Resumi = () => {
    return (  
       
        <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
            <HeaderNavbar></HeaderNavbar><br/><br/>
            <div className='container pb-5'>

<section class='resumi-aria'>
<div className="row d-flex align-items-center">
     <div className="col-md-6">
     <h1>Md Shahadat Hossain</h1>
   <h3 className='mb-4'>Front-end Developer</h3>
   <h5><b> Address</b><span className="h6 pl-3">: Banshkhali,kahargona,chattogram  </span></h5>
   <h5><b> Email</b><span className="h6 pl-5">:   mdshahadathossain10200@gmail.com  </span></h5>
   <h5><b> Phone</b><span className="h6 pl-5">:  +8801838159006  </span></h5>
   <h5><b> Github</b><span className="h6 pl-4"> <a href=" https://github.com/shahadat-rgb">: https://github.com/shahadat-rgb</a> </span></h5>
   <h5><b>Linkedin</b><span className="h6 pl-3"> <a href=" https://www.linkedin.com/in/md-shahadat-hossain-0134b11ab/">:  https://www.linkedin.com/in/md-shahadat-hossain-0134b11ab/</a> </span></h5>
     </div>
     <div className="col-md-6">
       <img style={{ height:'200px', paddingLeft:'40px'}} src={shahadat} alt=""/>
     </div>
 </div>
 <hr/>
  <h4><u>Summary</u></h4>
   <p>I am shahadat.i am a front-end developer.recently i have finished more than a few  projects or many projects on javascript and react.js. And I can make perfect responsive website design with css,bootstrap4,material ui, flexbox, and grid layout.i also have solid knowledge working with node.js,express.js mongodb,firebase, and heroku.now i am ready and excited for learn redux ,and react native
     Programming Knowledge</p>
  <h4><u>Programming Knowledge</u></h4>
  <h5><b> Expertise  </b><span className="h6 pl-5">: HTML5, CSS3,  Bootstrap4, Javascript, ES6, React.js,</span></h5>
  <h5><b> Comfortable    </b><span className="h6 pl-3">: Node.js,    ,Mongodb,     Express.js,     Material ui.</span></h5>
  <h5><b className='pr-3'> Familiar    </b><span className="h6 pl-5">: C,     Redux.js,    AJAX,   JQuery,  MYSQL</span></h5>
  <h5><b className='pr-4'> Tools </b><span className="h6 pl-5 pb-5">: Vs code,  get,  create react app,  npm,  Netlify</span></h5><br/>
   
  <h4><u>Work Experience</u></h4>
  <h5>Travel Guro:</h5>
  <h5><b>Technology used  </b><span className="h6 pl-5">: React.js, firebase authentication, CSS, Bootstrap4</span></h5>
  <h5><b>Project details  </b><span className="h6 pl-5">: This is a single travel guro website ,where people can select their favorite place in if They want to stay.sreemangal,sajex and sundorbon.In this website there have been </span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href="https://github.com/shahadat-rgb/firebase-auth-assignment.git">: https://github.com/shahadat-rgb/firebase-auth-assignment.git</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href=" https://fir-auth-assignment.firebaseapp.com">:  https://fir-auth-assignment.firebaseapp.com</a> </span></h5><br/>
   
   <h5>Creative Agency</h5>
   <h5><b>Technology used  </b><span className="h6 pl-5">: React.js, firebase authentication,Bootstrap4,Material ui,React bootstrap,react hook  from,Heroku.node.js,express.js</span></h5>
  <h5><b>Project details  </b><span className="h6 pl-5">: A single web application with different  dashboard for admin and client.only admin can show all details and can be accessed.And can be of any order and review if he wishes. </span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href=" https://github.com/shahadat-rgb/agency-website-client.git">: https://github.com/shahadat-rgb/agency-website-client.git</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href="  https://creative-agency-client-3aee9.web.app">:  https://creative-agency-client-3aee9.web.app</a> </span></h5><br/>

  <h5>Eschool-learning</h5>
   <h5><b>Technology used  </b><span className="h6 pl-5">:HTML5,  CSS3,  Bootstrap4</span></h5>
  <h5><b>Project details  </b><span className="h6 pl-5">:  A simple responsive and one page e learning school website design.</span></h5>
  <h5><b>github</b><span className="h6 pl-4"> <a href=" https://github.com/shahadat-rgb/E-School-learning.git">:  https://github.com/shahadat-rgb/E-School-learning.git</a> </span></h5>
  <h5><b>site link</b><span className="h6 pl-4"> <a href="https://shahadat-rgb.github.io/E-School-learning">: https://shahadat-rgb.github.io/E-School-learning</a> </span></h5><br/>
   
   <h4><u> Academic Qualification</u></h4>
   <h5> Student of Alim (2020-2021)</h5>
   <h5><b> Madrasah </b><span className="h6 pl-3">:   Al-amin Bariha Kamil Model Madrasah </span></h5>
   <h5><b> Location</b><span className="h6 pl-3">:  Chandgown,Bahir singna,Chittagong</span></h5><br/>

   <h4><u> Language Competency</u></h4>
   <h5><b> Bangla  </b><span className="h6 pl-3">:   Fluent in Bangla</span></h5>
   <h5><b>English </b><span className="h6 pl-3">: Familiar working knowledge in English.</span></h5>
</section>
</div>
        </div>
    );
};

export default Resumi;

