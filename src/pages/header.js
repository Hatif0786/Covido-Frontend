import React from 'react';
import {Link} from "react-router-dom";


function Header() {
    return (
        <header className="header-area">
           <div className="left">
              <a href="Javascript:void(0)"><i className="fa fa-search" aria-hidden="true"></i></a>
           </div>
           <div className="right">
              <a href="Javascript:void(0)"><i className="fa fa-user" aria-hidden="true"></i></a>
           </div>
           <div className="container">
              <div className="row d_flex">
                 <div className="col-sm-3 logo_sm">
                    <div className="logo">
                     <Link to="/">
                       {/* <a href="index.html"> */}{/* </a> */}
                     </Link>
                    </div>
                 </div>
                 <div className="col-lg-10 offset-lg-1 col-md-12 col-sm-9">
                    <div className="navbar-area">
                       <nav className="site-navbar">
                          <ul>
                             <li><Link to="/">{/* <a className="active" href="index.html"> */}Home{/* </a> */}</Link></li>
                             <li><Link to="/About">{/* <a href="about.html"> */}About{/* </a> */}</Link></li>
                             <li><Link to="/action">{/* <a href="action.html"> */}take action{/* </a> */}</Link></li>
                             <li><Link to="/" className="logo_midle">{/* <a href="index.html" className="logo_midle"> */}covido{/* </a> */}</Link></li>
                             <li><Link to="/news">{/* <a href="news.html"> */}news{/* </a> */}</Link></li>
                             <li><Link to="/doctoresHooks">{/* <a href="doctores.html"> */}doctores{/* </a> */}</Link></li>
                             <li><Link to="/contact">{/* <a href="contact.html"> */}Contact {/* </a> */}</Link></li>
                          </ul>
                          <button className="nav-toggler">
                          <span></span>
                          </button>
                       </nav>
                    </div>
                 </div>
              </div>
           </div>
        </header>
    )
}

export default Header