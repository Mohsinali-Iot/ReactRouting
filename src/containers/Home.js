import React from "react";
import {Link} from 'react-router-dom'
import Child from "../component/child";


class Home extends React.Component{

    constructor(){
        super()
        this.state={
            c:0

        }
        console.log("First constructor run")
        console.log("2nd getDerivedStateFromProps run")
    }

    static getDerivedStateFromProps(props,state){
        
        console.log("Run when state or props update")
        console.log("state====>",state)
        return null
    
       
    }
    componentDidMount(){
        console.log("componentDidMount")

  
    }
    shouldComponentUpdate(){
        if(this.state.c<5){
            return true
        }
    }
    getSnapshotBeforeUpdate(preprops,prestate){
        console.log("PreState",prestate)
        return "Will received in componentDidUpdate 3rd parameter"

    }
    componentDidUpdate(preprops,prestate,snapshot){
        console.log("componentDidUpdate PreState",prestate)
        console.log("Snapshot===>",snapshot)


    }

    componentWillUnmount(){
        console.log("component Khalas")
    }
    myval=()=>{
        this.setState({
            c:0
        })
    }
    render(){
        console.log("3rd render will run")
        return(
    
            <div >
                <h2>First constructor run</h2>
                <h2>2nd getDerivedStateFromProps run it update in state It Run when component's state or props update</h2>
                <h2>3rd render will run</h2>
                <h2>4th componentDidMount</h2>
                <h2>shouldComponentUpdate stop us from rendering on update state or props</h2>
                <h2>getSnapshotBeforeUpdate when props update it take snapshot before update</h2>
                <h2>componentdidupdate </h2>


                <h2>{this.state.c <5 && <Child/>}</h2>
                <h1>{this.state.c}</h1>
                <button onClick={()=>this.setState({c:this.state.c+1})}>Inc</button>

                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
             </div>
        )
    }
}

export default Home;