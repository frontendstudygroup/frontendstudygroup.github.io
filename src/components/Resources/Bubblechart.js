import { React } from 'react';
import * as d3 from 'd3';
import "./Bubblechart.css";


const Bubblechart = (aData) => {
  let jsonToDisplay = { "children":[...aData.data] };
  let diameter = 1000,
    color = d3.scaleOrdinal(["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b", "#e377c2", "#7f7f7f", "#bcbd22", "#17becf"]);
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
    .sum(function (d) { return d.id })
    .sort(function (a, b) { return b.id - a.id });


  bubble(root);

  let node = svg.selectAll('node')
    .data(root.children)
    .enter()
    .append('g').attr('class', 'node')
    .attr('transform', function (d) {return 'translate(' + d.x + ' ' + d.y + ')'; })


  node.append("circle")
    .attr('r', function (d) {
      return d.r;
    })
    .style("fill", function (d) {
      return color(d);
    });

  node.append("text")
    .attr("dy", ".3em")
    .style("text-anchor", "middle")
    .text(function (d) { return d.data.login})
    .style("fill", "#ffffff");

  node.append("text")
    .attr("dy", "2em")
    .style("text-anchor", "middle")
    .text(function (d) { return  d.data.contributions})
    .style("fill", "#EEEfff");


  return (
    <div>
      <svg id="chart" className="chart" ></svg>
    </div>
  );
}
export default Bubblechart;
