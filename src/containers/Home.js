import React from "react";
import {Link} from 'react-router-dom'


class Home extends React.Component{
    render(){
        return(
            <div>
                <h3>Home</h3>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        )
    }
}

export default Home;