$(document).ready(function(){
    
    var dotMargin = 5;
    var numRows = 10;
    var numCols = 10;
    // calculate dot sizes and position 
    
    // set width and height on attribute of canvas
    var canvas = $('canvas.dots');
    var context = canvas[0].getContext('2d');
    var canvasWidth = canvas.width(300);
    var canvasHeight = canvas.height(300);
    canvas.attr({ height: canvas.height(), width: canvas.width() });
    
    // setting the margins between the dot sizes and positions.
    var dotWidth = ((canvasWidth - (2 * dotMargin)) / numCols) - dotMargin;
    var dotHeight = ((canvasHeight - (2 * dotMargin)) / numRows) - dotMargin;

    if( dotWidth > dotHeight) {
        var dotDiameter = dotMargin;
        var xMargin = (canvasWidth - ((2 * dotMargin) / (numCols * dotDiameter))) / numCols;
        var yMargin = dotMargin;
    } else {
        var xMargin = dotMargin;
        var yMargin = (canvasHeight - ((2 * dotMargin) + (numRows * dotDiameter))) / numRows;
    }

    // radius for each dot
    var dotRadius = dotDiameter * 0.5;

    // set dots dynamic to see changes
    // var numDots = 5;
    for(var i = 0; i < numRows; i++) {
        for(var j = 0; j < numCols; j++) {
                var x = (j * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
                var y = (i * (dotDiameter + xMargin)) + dotMargin + (xMargin / 2) + dotRadius;
            drawDot(x, y, dotRadius);
        }
    }

    function drawDot(x, y, radius) {
        // Draw circle
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI, false);
        context.fillStyle = '#42f3b8';
        context.fill();
        }
});



