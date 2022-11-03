var d = document.getElementById("dibujingo");
var lienzo = d.getContext("2d");

function dibujarlinea(color, xi, yi, xf, yf)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
var colorcito="#AAF";
var lineas = 30;
var l = 0;
var yi=0;
var xf=10;

dibujarlinea(colorcito, 1, 1, 1, 300);
dibujarlinea(colorcito, 1, 299, 299, 299);

for(l=0; l < lineas; l++)
{
    dibujarlinea(colorcito,0 , yi, xf, 300);
    yi=yi+10
    xf=xf+10
}
