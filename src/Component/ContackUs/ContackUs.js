import React from 'react';
import emailjs from 'emailjs-com';
import animation from "../../images/animation.gif"
import HeaderNavbar from '../Home/HeaderNavbar/HeaderNavbar';
const ContackUs = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm("gmail","template_i4eh8js", e.target, 'user_6j3zenfbo1CeQIGXZeWsl')
          .then((result) => {
              if (result) {
                  alert('email confirm successfully')
              }
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }
    return (
       <div  style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${animation})`}}>
           <HeaderNavbar></HeaderNavbar>
           <div>
             <h2 style={{color:'rgb(81, 233, 157)',marginTop:'60px',marginBottom:'60PX',textAlign:'center'}}>Contact Me</h2>
              <section className='d-flex justify-content-center'>
              <section className='col-12 col-sm-6 col-md-7 mb-5'> 
              <form onSubmit={sendEmail}> 
                       <h2 className='text-center text-white pb-3'>Get To Touch</h2>
                       <div className="form-group">
                           <input type="text" className="form-control" name='name' required placeholder="your name *"/>
                       </div>
                       <div className="form-group">
                           <input type="email" className="form-control" name='email' required placeholder="your email address"/>
                       </div>
                       <div className="form-group">
                           <textarea name="massage" className="form-control" cols="20" rows="5" required placeholder="your Message"></textarea>
                       </div>
                       <div className="form-group">
                               <input type="submit" className="send-btn"  value ='Send Meassage'/>
                     </div>
                   </form>
              </section>
              </section>
                    <h5 className="text-center text-white pb-3">Design & Created by <span style={{color:'rgb(81, 233, 157)'}}>Ashik Mahmud</span></h5>
        </div>
       </div>
    );
};

export default ContackUs;