export default function drawTop5(top5Data) {
  const width = 900;
  const height = 450;
  const margin = 40;

  const cerealNames = top5Data.map((cereal) => cereal.name);

  const xscale = d3.scaleBand()
    .domain(cerealNames)
    .range([margin, width])
    .padding(0.05)

  const maxCarbs = Math.max(...top5Data.map((cereal) => cereal.carbo))
  const yscale = d3.scaleLinear()
    .domain([0, maxCarbs])
    .range([height, margin])

  const svg = d3.select('#svg_top_cereals_carbs')
    .style('margin-top', margin)
    .style('border', 'solid 1px')

  const bottomAxis = d3.axisBottom(xscale)
  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(bottomAxis)

  const leftAxis = d3.axisLeft(yscale)
  svg
    .append('g')
    .attr('transform', `translate(${margin}, 0)`)
    .call(leftAxis)

  const color = d3.scaleOrdinal()
    .domain(cerealNames)
    .range(['tomato', 'gold', 'lime', 'cornflowerblue', 'purple'])

  const title = svg.append('g')

  title
    .append('text')
    .text('Top 5 Cereals and Their Carbo Content')
    .attr('transform', `translate(${width / 2.8}, 20)`)
    .attr('class', 'labelText')

  svg.append('g')
    .selectAll('rect')
    .data(top5Data)
    .enter()
    .append('rect')
    .attr('fill', (d, i) => color(i))
    .attr('x', (d, i) => xscale(d.name))
    .attr('y', (d, i) => yscale(d.carbo))
    .attr('width', xscale.bandwidth())
    .attr('height', (d) => height - yscale(d.carbo))
};
