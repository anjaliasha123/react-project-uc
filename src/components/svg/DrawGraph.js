import React, { useEffect } from "react";
import * as d3 from 'd3';
import { spiral } from '../../utilities/Spiral';

function DrawGraph(props) {

    useEffect(() => {

        const svg = d3.select("svg");
        var dPath = spiral(275,350,props.itterations,5);
        var spath = svg.append('path')
            .attr("class", "spiral")
            .attr('d', dPath)
            .attr("fill", "none")
            .attr("stroke", "red");
        var length = spath.node().getTotalLength();
        spath.attr('stroke-dasharray', length + ' ' + length)
            .attr('stroke-dashoffset', length)
            .transition()
            .duration(3000)
            .ease('cubic-in')
            .attr('stroke-dashoffset', 0);

    });

    return (<React.Fragment />)
}
export default DrawGraph;