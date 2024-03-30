function degtorad(degrees) {
    return degrees * Math.PI / 180;
}
function drawbraceletarc(context, x,  radius, lineColor) {
    context.beginPath();
    context.fillStyle = lineColor;
    context.arc(x, -2.5, radius, degtorad(0), degtorad(360));
    context.fill();
    context.closePath();
}
export default drawbraceletarc;
