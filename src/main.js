import DrawCadran from "./js/clock/cadran.js";
import DrawNumbers from "./js/clock/number.js";
import DrawTime from "./js/clock/time.js";
import drawbracelet from "./js/watch/barcelet.js";
import drawbraceletarc from "./js/watch/barceletarc.js";
import drawhole from "./js/watch/hole";
import accroche from "./js/watch/accroche";



const cadran = document.getElementById("cadran");
const contextCadran = cadran.getContext("2d");
let radius = cadran.height / 2;
contextCadran.translate(radius*5, radius);
radius = radius * 0.90
setInterval(drawClock, 1000);

function drawClock() {
    DrawCadran(contextCadran, radius);
    DrawNumbers(contextCadran, radius);
    DrawTime(contextCadran, radius);
}



// Draw horizontal bars
drawbracelet(contextCadran, -330, 700, -40, 75, "black");
drawbraceletarc(contextCadran, -330, 37, 1000, 40, 75, "black");
let holespace = -300;
for (let i = 0; i < 5; i++) {
    drawhole(contextCadran, holespace, 7.5, "white");
    holespace += 50
}
accroche(contextCadran, 320, 40, "white")
