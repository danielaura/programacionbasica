var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};

document.addEventListener("keyup", dibujarEspejo);

var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
const X = 150;
const Y = 150;
var x = 0;
var y = 0;

dibujarlinea("green", 149, 149, 150, 150, papel);
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

function dibujarEspejo(evento)
{
    var color = "green";
    var colore = "red";
    var mov = 10;
    switch(evento.keyCode)
    {
        case teclas.RIGHT:
            dibujarlinea(color, X+x, Y+y, X+x+mov, Y+y, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x-mov, Y+y, papel);
            x=x+mov
            
            break;
        case teclas.LEFT:
            dibujarlinea(color, X+x, Y+y, X+x-mov, Y+y, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x+mov, Y+y, papel);
            x=x-mov

            break;
        case teclas.UP:
            dibujarlinea(color, X+x, Y+y, X+x, Y+y-mov, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x, Y+y-mov, papel);           
            y=y-mov    
        break;
        case teclas.DOWN:
            dibujarlinea(color, X+x, Y+y, X+x, Y+y+mov, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x, Y+y+mov, papel);           
            y=y+mov;
        break;
        default:
        break;        
    }
}



