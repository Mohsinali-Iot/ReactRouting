import React from "react";
import {Link} from 'react-router-dom'


class Contact extends React.Component{
    render(){
        return(
            <div>
                <h3>Contact</h3>
                
                <Link to='/'>Go to Home</Link>
                <Link to='/about'>Go to About</Link>
            </div>
        )
    }
}

export default Contact;