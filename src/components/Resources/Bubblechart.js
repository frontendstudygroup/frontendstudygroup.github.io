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
    
    let tooltip = svg
    .append("div")
    .style("opacity", 1)
    .attr("id", "tooltip")
    .style("z-index", "10") 
    .style("background-color", "black")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("color", "white")
    .style("position", "absolute");
  let showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .style("visibility", "visible")
      .style("stroke", "black")
      .text("Player: jklkjljljljlklklkljjkljlkj <br> Points with franchise: " )
      .style("left", (d.x + (d3.pointer(this)[0] + 90)) + "px")
      .style("top", (d.y + (d3.pointer(this)[1])) + "px");
  }
  let moveTooltip = function(d) {
    tooltip
      .style("left", (d.x + (d3.pointer(this)[0] + 30)) + "px")
      .style("top", (d.y + (d3.pointer(this)[1] + 30)) + "px");
  }
  let hideTooltip = function(d) {
          tooltip
            .transition()
            .duration(200)
            .style("opacity", 0)
            .style("visibility", "hidden");
        }

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
      return d.r/(Math.sqrt(1.5));
    })
    .style("fill", "#fff")
    .style("fill", function (d) { return "url(#" + d.data.id + ")" })
    .style("stroke", "black")
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseleave", hideTooltip)

  node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.login })
    .style("fill", "#ffffff");

  node.append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.contributions })
    .style("fill", "#EEEfff");



  return (
    <div>
      <svg id="chart" className="chart" ></svg>
    </div>
  );
}
export default Bubblechart;
