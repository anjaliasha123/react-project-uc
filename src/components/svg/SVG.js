import React, { useRef, useEffect } from "react";
import './SVG.css';
import * as d3 from 'd3';
import DrawGraph from './DrawGraph';

let width, height;
function SVG(props) {
    height = width = props.itterations * props.maxFib;
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        svg.append("path")
            .attr("d", "M275 0 V550")
            .attr("stroke", "blue")
            .attr("stroke-width", "2px");

        svg.append("path")
            .attr("d", "M0 350 H550")
            .attr("stroke", "blue")
            .attr("stroke-width", "2px");



    }
    );
    return (
        <div>
            <svg ref={svgRef} style={{ margin: "20px 20px" }} className={props.name} viewBox={`0 0 ${width} ${height}`}>
                <text x="0" y="340" fill="red" fontSize="20">X</text>
                <text x="280" y="20" fill="red" fontSize="20">Y</text>
                {props.generateGraph && <DrawGraph itterations={props.itterations}/>}
            </svg>
        </div>
    )

}


export default SVG;