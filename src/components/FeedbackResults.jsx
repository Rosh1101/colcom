import React, { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as d3 from "d3";
import "../pages/feedback/feedback.css";

const DEMO_RESULTS = [
  { choice: "Very Satisfied", count: 48 },
  { choice: "Satisfied", count: 36 },
  { choice: "Neutral", count: 21 },
  { choice: "Unsatisfied", count: 9 },
  { choice: "Very Unsatisfied", count: 6 }
];

export default function FeedbackResults() {
  const { id } = useParams();
  const d3Container = useRef(null);

  useEffect(() => {
    const data = DEMO_RESULTS;
    const w = 430, h = 260, margin = { top: 32, right: 24, bottom: 34, left: 64 };

    d3.select(d3Container.current).selectAll("*").remove(); // Cleanup SVG

    const svg = d3.select(d3Container.current)
      .attr("width", w)
      .attr("height", h);

    const x = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count) || 1])
      .range([margin.left, w - margin.right]);

    const y = d3.scaleBand()
      .domain(data.map(d => d.choice))
      .range([margin.top, h - margin.bottom])
      .padding(0.18);

    // X Axis
    svg.append("g")
      .attr("transform", `translate(0,${h - margin.bottom})`)
      .call(d3.axisBottom(x).ticks(5).tickSizeOuter(0))
      .attr("color", "#4da3ff")
      .selectAll("text").style("font-size", "13px").style("fill", "#b8d8ff");

    // Y Axis
    svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y).tickSizeOuter(0))
      .attr("color", "#4da3ff")
      .selectAll("text").style("font-size", "13px").style("fill", "#cce3fa");

    // Bars
    svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", x(0))
      .attr("y", d => y(d.choice))
      .attr("width", d => x(d.count) - x(0))
      .attr("height", y.bandwidth())
      .attr("fill", "url(#bar-gradient)")
      .attr("rx", 8);

    // Values
    svg.selectAll("text.bar-value")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bar-value")
      .attr("x", d => x(d.count) + 10)
      .attr("y", d => y(d.choice) + y.bandwidth()/2 + 2)
      .attr("text-anchor", "start")
      .style("fill", "#fff")
      .style("font-size", "1.07rem")
      .style("font-weight", 700)
      .text(d => d.count);

    // Bar gradient
    svg.append("defs")
      .append("linearGradient")
      .attr("id", "bar-gradient")
      .attr("x1", "0%").attr("x2", "100%")
      .attr("y1", "0%").attr("y2", "0%")
      .selectAll("stop")
      .data([
        { offset: "0%", color: "#4da3ff" },
        { offset: "100%", color: "#34d399" }
      ])
      .enter()
      .append("stop")
      .attr("offset", d => d.offset)
      .attr("stop-color", d => d.color);

  }, []);

  return (
    <div className="feedback-bg">
      <div className="feedback-header">
        <h2>Feedback Results</h2>
        <div className="fc-title">
          Survey ID: <b>{id}</b>
        </div>
      </div>
      <div className="chart-center">
        <svg ref={d3Container} className="chart-svg" role="img" aria-label="Feedback results chart"></svg>
      </div>
    </div>
  );
}
