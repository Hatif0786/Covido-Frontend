import React, { Component } from 'react';
import Header from "./header";
import Footer from "./footer";
import "./style.css"

class Doctores extends Component{
   constructor(props){
      super(props);

      this.state = {
        posts: [],
      };
   }

   componentDidMount()
   {
      fetch("http://localhost:8000/news/")
      .then(response => response.json())
      .then((result) =>{
         this.setState({
            posts : result,
         })
      })
   }
   
   render(){
      const{ posts } = this.state;
      return(
         <div>
         <Header/>
           <div className="doctors">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <div className="titlepage text_align_center ">
                        <h2>What doctors say..</h2>
                     </div>
                  </div>
               </div>
               {
                  posts.map(post =>
                  <div className="row d_flex">
                  <div className=" col-md-6">
                        <div id="ho_efcet" className="reader text_align_center">
                           <i><img src={post.Image} alt="#"/></i>
                           <h3>{post.Name}</h3>
                           <p>{post.Suggestion}</p>
                           <span><img src="assets/images/do.png" alt="#"/></span>
                        </div>
                     </div>
                           <div className=" col-md-6">
                        <div id="ho_efcet" className="reader text_align_center">
                           <i><img src={post.Image} alt="#"/></i>
                           <h3>{post.Name}</h3>
                           <p>{post.Suggestion}</p>
                           <span><img src="assets/images/do.png" alt="#"/></span>
                        </div>
                     </div>
                  </div>
                  )
                  }
            </div>
    </div>
    <Footer/>
      </div>

      );
   }
};





export default Doctores
