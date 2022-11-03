var d = document.getElementById("dibujingo");
var lienzo = d.getContext("2d");

// lienzo.beginPath();
// lienzo.strokeStyle = "black";
// lienzo.moveTo(100, 100);
// lienzo.lineTo(200, 200);
// lienzo.lineTo(300, 200);
// lienzo.stroke();
// lienzo.closePath();

// lienzo.beginPath();
// lienzo.strokeStyle = "red";
// lienzo.moveTo(150, 150);
// lienzo.lineTo(250, 200);
// lienzo.stroke();
// lienzo.closePath();

function dibujarlinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarlinea("green", 10, 300, 220, 10);
dibujarlinea("yellow", 30, 120, 210, 100);
dibujarlinea("red", 10, 30, 20, 70);
dibujarlinea("black", 10, 50, 22, 160);