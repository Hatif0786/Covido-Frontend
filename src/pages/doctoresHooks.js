import React, {useState, useEffect} from 'react';
import Header from "./header";
import Footer from "./footer";
import api from "./api";
import Doc from "./doc";

function DoctoresHooks() {
    const[Post, setPost] = useState([]);


    useEffect(function(){
        
            api.getData()
            .then((Response) => setPost(Response.data))
            .then((error) => console.log(error));
    })




    return (
        <div>
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
                       Post.map(post =>
                        <Doc 
                         Key={post.id}
                         Image={post.Image} 
                         Name={post.Name} 
                         Suggestion={post.Suggestion}
                        />
                        )
                    }


              {/*  {
                  Posts.map(post =>
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
                  } */}
            </div>
    </div>
    <Footer/>
      </div>

        </div>
    )
}

export default DoctoresHooks
