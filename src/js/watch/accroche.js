function accroche(ctx, x, radius, color) {
    ctx.beginPath();

    ctx.fillStyle = color;
    ctx.fillRect(x, -27.5, radius, 50);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.fillRect(x, -7.5, radius-10, 10);
    ctx.closePath();
}

export default accroche;
