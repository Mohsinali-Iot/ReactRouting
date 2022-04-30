import { formatMs } from "@material-ui/core";
import React from "react";

class Header extends React.Component{
 
    render(){
        console.log("Props====>",this.props.get_props2)
        return(
            <div>
                <h2>Header</h2>{this.props.name}
                <button onClick={()=>{this.props.get_props2()}}>Propps</button>
            </div>
        )
    }
}
export default Header;