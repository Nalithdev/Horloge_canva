function drawbracelet(context, startX, width, startY, height, lineColor) {
        context.beginPath();
        context.strokeStyle = lineColor;
        context.fillRect(startX, startY, width, height);
        context.stroke();
        context.closePath();
}



export default drawbracelet;
