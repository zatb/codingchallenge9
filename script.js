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
        
     // On "mouseover", change the div's background color to a more vibrant one (e.g., "firebrick").
        d3.select(this).style('background-color', 'firebrick');
    })
// Attach event listeners for "mouseover" and "mouseout" to change the div elements' styles on hover and revert them when the mouse moves away.
    .on('mouseout', function(event, d) {

        // On "mouseout", revert the div's background color to its original state.
        d3.select(this).style('background-color', 'gray');
    });
});
