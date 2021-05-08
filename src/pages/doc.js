import React from 'react';

function Doc(props) {
    return (
        <div>
            <div className="row d_flex">
                  <div className=" col-md-6">
                        <div id="ho_efcet" className="reader text_align_center">
                           <i><img src={props.Image} alt="#"/></i>
                           <h3>{props.Name}</h3>
                           <p>{props.Suggestion}</p>
                           <span><img src="assets/images/do.png" alt="#"/></span>
                        </div>
                     </div>
                           <div className=" col-md-6">
                        <div id="ho_efcet" className="reader text_align_center">
                           <i><img src={props.Image} alt="#"/></i>
                           <h3>{props.Name}</h3>
                           <p>{props.Suggestion}</p>
                           <span><img src="assets/images/do.png" alt="#"/></span>
                        </div>
                     </div>
                  </div>
        </div>
    )
}

export default Doc
