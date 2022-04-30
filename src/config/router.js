import React from 'react'

import {BrowserRouter as Router, Route,} from "react-router-dom";
import Home from '../containers/Home';
import About from '../containers/About';
import Contact from '../containers/contact';


class AppRouter extends React.Component{
    render(){
        return(
            <Router>
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/contact'component={Contact}/>
            </Router>
            
        )
    }
}
export default AppRouter;