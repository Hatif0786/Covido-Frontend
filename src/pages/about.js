import React from 'react';
import Header from "./header";
import Footer from "./footer";

function About() {
    return (
        <div>
           
         <Header/>

         <div> </div>

         <div className="about">
         <div className="container_width">
            <div className="row d_flex">
                   <div className="col-md-7">
                  <div className="titlepage text_align_left">
                     <h2>About Corona Virus </h2>
                     <p>English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for
                     </p>
                     <a className="read_more" href="about.html">About More</a>
                  </div>
               </div>
               <div className="col-md-5">
                  <div className="about_img text_align_center">
                     <figure><img src="assets/images/about.png" alt="#"/></figure>
                  </div>
               </div>
              
            </div>
         </div>
      </div> 

      <Footer/>

        </div>
    )
}


export default About;
