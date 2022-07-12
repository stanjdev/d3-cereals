export default function drawTopContent(content) {
  const width = 900;
  const height = 450;
  const margin = 40;

  const contentNames = content.map((line) => line.name);

  const xscale = d3.scaleBand()
    .domain(contentNames)
    .range([margin, width])
    .padding(0.05)

  const valueExtent = d3.extent(content, (d) => d.value)
  const yscale = d3.scaleLinear()
    .domain(valueExtent)
    .range([height, margin])

  const svg = d3.select('#svg_top_cereal_contents')
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
    .domain(contentNames)
    .range(['tomato', 'gold', 'lime', 'cornflowerblue', 'purple'])

  const title = svg.append('g')

  title
    .append('text')
    .text('All-Bran with Extra Fiber')
    .attr('transform', `translate(${width / 2.8}, 20)`)
    .attr('class', 'labelText')

  svg.append('g')
    .selectAll('rect')
    .data(content)
    .enter()
    .append('rect')
    .attr('fill', (d, i) => color(i))
    .attr('x', (d, i) => xscale(d.name))
    .attr('y', (d, i) => yscale(d.value))
    .attr('width', xscale.bandwidth())
    .attr('height', (d) => height - yscale(d.value))
};
