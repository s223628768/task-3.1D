// Sample data (replace with your own dataset)
const data = [
    { category: "Category 1", value: 10 },
    { category: "Category 2", value: 20 },
    // Add more data points
];

// Define the SVG dimensions
const width = 400;
const height = 300;

// Create an SVG element
const svg = d3.select("#visualization-container")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Create a scale for x and y axes
const xScale = d3.scaleBand()
    .domain(data.map(d => d.category))
    .range([0, width])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([height, 0]);

// Create and append the bars
svg.selectAll(".bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xScale(d.category))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => height - yScale(d.value));
