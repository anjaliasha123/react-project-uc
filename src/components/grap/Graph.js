import React, { Component } from "react";
import Button from "../button/Button";
import Heading from "../heading/Heading";
import SVG from "../svg/SVG";
import { fib } from '../../utilities/Fibonacci';


class Graph extends Component {

    render() {
        
        return (
            <div className="app-graph">
                <Heading Msg={'Graph'} />
                <SVG name={"svg-fib"} itterations={this.props.itterations} maxFib={fib(this.props.itterations)} generateGraph={this.props.genGraph} />
                <Button btnMsg={'Draw'} txtMsg={'Fibonacci Spiral'} getButtonStatus={this.props.getButtonStatus} />
            </div>
        )
    }
}
export default Graph;