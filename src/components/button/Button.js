import React, { Component } from "react";
import Heading from "../heading/Heading";
import './Button.css';

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            clickedStatus: false
        });
    }
    changeClickStatus = () => {
        this.setState({
            clickedStatus: true
        });
    }
    clickHandler = (event) => {
        this.changeClickStatus();
        this.props.getButtonStatus(true, event);
        event.preventDefault();
    }

    render() {
        return (

            <div className="app-button">
                {this.props.h1Msg && <Heading Msg={this.props.h1Msg} />}
                {(this.state.clickedStatus === false) && <button className={"share-button " + this.props.name} onClick={this.clickHandler} style={this.props.style}>{this.props.btnMsg} <span className={this.props.gly}></span></button>}
                {this.state.clickedStatus && <h1 className="hello">{this.props.txtMsg}</h1>}
            </div>
        )
    }
}
export default Button;