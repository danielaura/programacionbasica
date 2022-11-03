var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};

document.addEventListener("keyup", dibujarTeclado);

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarlinea("green", 149, 149, 151, 151, papel);

function dibujarlinea(color, xi, yi, xf, yf,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}
function dibujarTeclado(evento)
{
    var color = "blue";
    var mov = 10;
    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarlinea(color, x, y, x, y-mov, papel);
            y=y-mov;
        break;
        case teclas.DOWN:
            dibujarlinea(color, x, y, x, y+mov, papel);
            y=y+mov;
        break;
        case teclas.LEFT:
            dibujarlinea(color, x, y, x-mov, y, papel);
            x=x-mov;
        break;
        case teclas.RIGHT:
            dibujarlinea(color, x, y, x+mov, y, papel);
            x=x+mov;
        break;
        default:
        break;
    }
}