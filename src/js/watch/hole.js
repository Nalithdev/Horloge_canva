function drawhole(ctx, x, radius, color) {
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.arc(x, 0, radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}

export default drawhole;
