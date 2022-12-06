import React, { Component } from "react";
import Heading from "../heading/Heading";
import './Calculator.css';
class Calculator extends Component{
    render(){
        return(
            <div className="app-cal">
                <Heading Msg={'Calculator'}/>
                <iframe src="https://ahfarmer.github.io/calculator/" title="cal"/>
            </div>
        )
    }
}
export default Calculator;