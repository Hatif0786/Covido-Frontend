import React from 'react'
import Footer from './footer'
import Header from './header'

function Contact() {
    return (
        <div>
           <Header/>
            <div className="contact">
         <div className="container">
            <div className="row">
                <div className="col-md-12">
                     <div className="titlepage text_align_left">
                        <h2>Contact Us</h2>
                     </div>
                  </div>
            </div>
            <div className="row">
               <div className="col-md-6">
                  <form id="request" className="main_form">
                     <div className="row">
                        <div className="col-md-12 ">
                           <input className="contactus" placeholder="Full Name" type="type" name=" Name"/> 
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Phone" type="type" name="Phone Number"/>                          
                        </div>
                        <div className="col-md-12">
                           <input className="contactus" placeholder="Email" type="type" name="Email"/> 
                        </div>
                        <div className="col-md-12">
                           <textarea className="textarea" placeholder="Message" type="type" Message="Name"></textarea>
                        </div>
                        <div className="col-md-12">
                           <button className="send_btn">Send Now</button>
                        </div>
                     </div>
                  </form>
               </div>
                <div className="col-md-6">
                  <div className="map-responsive">
                     <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" width="600" height="540" frameborder="0" id="tui" allowfullscreen=""></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <Footer/>
        </div>
    )
}

export default Contact
