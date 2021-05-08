import React, { Component } from "react";
import Homepage from "./pages/homepage";
import About from "./pages/about";
import Action from "./pages/action";
import Contact from "./pages/contact";
import DoctoresHooks from "./pages/doctoresHooks";
import Doctores from "./pages/doctores"
import News from "./pages/news";
import {BrowserRouter, Switch, Route} from "react-router-dom";

class Routes extends React.Component {
    render(){
        return(
         <div>
             <Switch>
                 <Route exact path="/" component={Homepage}/>
                 <Route path="/About" component={About}/>
                 <Route path="/action" component={Action}/>
                 <Route path="/contact" component={Contact}/>
                 {/* <Route path="/doctores" component={Doctores}/> */}
                 <Route path="/doctoresHooks" component={DoctoresHooks}/>
                 <Route path="/news" component={News}/>
             </Switch>
         </div>
        )
    }
}

export default Routes;
