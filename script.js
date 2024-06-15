// U36432650

// Write a function to initialize your page that creates div elements as data points and attaches interactive behaviors using D3.js.
document.addEventListener('DOMContentLoaded', function() {
    const data = [1, 2, 3];

    const divs = d3.select('body').selectAll('.data-point')
        .data(data)
        .enter()
        .append('div')
        .attr('class', 'data-point');

    // Attach event listeners for "mouseover" and "mouseout" to change the div elements' styles on hover and revert them when the mouse moves away.
    divs.on('mouseover', function(event, d) {
        })
        .on('mouseout', function(event, d) {
        });
});
