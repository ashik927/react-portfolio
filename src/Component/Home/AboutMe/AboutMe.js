import React from 'react';
import ashik from "../../../ashik.jpg"
import "./AboutMe.css"
const AboutMe = () => {
    return (
        <div style={{ marginTop: "60px"}} id='AboutUs'>
             <h1 style={{ color:'white', textAlign: "center",marginBottom:"80px" }}>
             About <span style={{ color: "rgb(81, 233, 157)"}}>Me </span>
        </h1>
       <div className="row">
            <div className="col-md-6">
              <img style={{height:'200px',margin:'0 auto',marginBottom:'15px',borderRadius:'50%'}} src={ashik} alt=""/>
              <h2 className='text-white'> <span style={{color:'rgb(81, 233, 157)'}}>I'am</span> Khandker Ashik Mahmud </h2>
             <p className='text-white mb-3'>I am Ashik. I am a front-end developer. Recently i have finished more than a few  projects or many projects on javascript and react.js. And I can make perfect responsive website design with css,bootstrap4,material ui, flexbox, and grid layout.i also have solid knowledge working with node.js,express.js mongodb,firebase, and heroku.now i am ready and excited for learn redux ,and react native</p>
           </div>
           <div className="col-md-6"> 
             <h3 className='text-white'>My programming skill</h3>
              <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>React.js</span>
                <span>javascript</span>
                <span>bootstrap4</span>
                <span>Material-Ui</span><br/><br/>
                <span>ES6</span>
                <span>Node.js</span>
                <span>Express.js</span>
                <span>mongodb</span>
                <span>Mysql</span>
                <span>firebase</span><br/><br/>
                <span>Heroku</span>
                <span>Vs code</span>
              </div>
                
              <h3 className='text-white mt-4'>I want to work with</h3>
              <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>React.js</span>
                <span>javascript</span>
                <span>Node.js</span>
                 <span>mongodb</span>
                <br/><br/>
              </div>

              <h3 className='text-white mt-4'>Looking forward to learn</h3>
              <div style={{width:'100px',height:'3px',background:"rgb(81, 233, 157)",marginBottom:"15px"}}></div>
              <div className='technolog'>
                <span>Redux.js</span>
                <span>Type Script</span>
                <span>Next Js</span>
                 <span>React native</span>
                <br/><br/>
              </div>
           </div>
       </div>
        </div>
    );
};

export default AboutMe;