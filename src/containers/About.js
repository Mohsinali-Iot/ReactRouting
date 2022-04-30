import React from "react";
import {Link} from 'react-router-dom'


class About extends React.Component{
    render(){
        return(
            <div>
                <h3>About</h3>
                <Link to='/'>Go to Home</Link>
                <Link to='/contact'>Go to Contact</Link>
            </div>
        )
    }
}

export default About;