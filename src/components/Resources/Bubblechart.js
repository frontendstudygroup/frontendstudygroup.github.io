import { React } from 'react';
import * as d3 from 'd3';
import "./Bubblechart.css";


const Bubblechart = (aData) => {
  let jsonToDisplay = { "children": [...aData.data] };
  let diameter = 1000;
  // color = d3.scaleOrdinal(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);
  let bubble = d3.pack()
    .size([diameter, diameter])
    .padding(2);

  let margin = {
    left: 100,
    right: 100,
    top: 0,
    bottom: 0
  }

  let svg = d3.select('#chart').append('svg')

    .attr('viewBox', '0 0 ' + (diameter + margin.right) + ' ' + diameter)
    .attr('width', (diameter + margin.right))
    .attr('height', diameter)
    .attr('class', 'chart-svg');




  let root = d3.hierarchy(jsonToDisplay)
    .sum(function (d) { console.log(d.id); return d.id; })

    .sort(function (a, b) { return b.id - a.id });


  bubble(root);

  let node = svg.selectAll('node')
    .data(root.children)
    .enter().append('g')
    .attr('class', 'node')
    .attr('transform', function (d) { return 'translate(' + d.x + ' ' + d.y + ')'; })


  let defs = node.append('defs');

  defs.append("pattern")
    .attr("id", function (d) { console.log(d.data.id); return d.data.id })

    .attr("width", 10)
    .attr("height", 10)
    .append("image")
    .attr("xlink:href", function (d) {
      return d.data.avatar_url
    })
    .attr('height', function (d) { return d.r * 2 })
    .attr('width', function (d) { return d.r * 2 * 1.02 })
    .attr("x", 0)
    .attr("y", 0);


  node.append("circle")
    .attr('r', function (d) {
      return d.r / (Math.sqrt(1.5));
    })
    .style("fill", "#fff")
    .style("fill", function (d) { return "url(#" + d.data.id + ")" })
    .style("stroke", "black")
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseout", mouseout);


  let div = d3.select("#bubble").append("div")
    .attr("class", "tooltip")
    .style("display", "none");

  function mouseover() {
    div.style("display", "inline");
  }

  function mousemove(event, d) {
    const [x, y] = d3.pointer(event);
    div
      .text(d.data.login + ", " + d.data.contributions)
      .style("left", (x + 800) + "px")
      .style("top", (y + 200) + "px");
  }

  function mouseout() {
    div.style("display", "none");
  }



  return (
    <div id="bubble" className="bubble">
      <svg id="chart" className="chart" ></svg>
    </div>
  );
}
export default Bubblechart;
