var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SEVEN: 36, NINE: 33, ONE: 35, THREE: 34 
};
document.addEventListener("keyup", dibujarMandalas);
var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d");
const X = 150;
const Y = 150;
var x = 0;
var y = 0;
// dibujarlinea("black", 0, 150, 300, 150, papel);
// dibujarlinea("black", 150, 0, 150, 300, papel);
// dibujarlinea("black", 0, 0, 300, 300, papel);
// dibujarlinea("black", 300, 0, 0, 300, papel);

function dibujarMandalas(evento)
{
    var col = "Orange";
    var colo = "Pink";
    var color = "green";
    var colore = "red";
    var mov = 10;
    switch(evento.keyCode)
    {
        case teclas.RIGHT:
            dibujarlinea(color, X+x, Y+y, X+x+mov, Y+y, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x-mov, Y+y, papel);
            dibujarlinea(color, X+x, Y-y, X+x+mov, Y-y, papel);           
            dibujarlinea(colore, X-x, Y-y, X-x-mov, Y-y, papel);
            x=x+mov
            dibujarlinea(color, Y+y, X+x, Y+y, X+x-mov, papel);           
            dibujarlinea(colore, Y-y, X+x, Y-y, X+x-mov, papel);           
            dibujarlinea(color, Y+y, X-x, Y+y, X-x+mov, papel);           
            dibujarlinea(colore, Y-y, X-x, Y-y, X-x+mov, papel);           
        break;
        case teclas.LEFT:
            dibujarlinea(color, X+x, Y+y, X+x-mov, Y+y, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x+mov, Y+y, papel);
            dibujarlinea(color, X+x, Y-y, X+x-mov, Y-y, papel);           
            dibujarlinea(colore, X-x, Y-y, X-x+mov, Y-y, papel);
            x=x-mov
            dibujarlinea(color, Y+y, X+x, Y+y, X+x+mov, papel);           
            dibujarlinea(colore, Y-y, X+x, Y-y, X+x+mov, papel);           
            dibujarlinea(color, Y+y, X-x, Y+y, X-x-mov, papel);           
            dibujarlinea(colore, Y-y, X-x, Y-y, X-x-mov, papel);           
        break;
        case teclas.UP:
            dibujarlinea(color, X+x, Y+y, X+x, Y+y-mov, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x, Y+y-mov, papel);           
            dibujarlinea(color, X+x, Y-y, X+x, Y-y+mov, papel);           
            dibujarlinea(colore, X-x, Y-y, X-x, Y-y+mov, papel);           
            y=y-mov    
            dibujarlinea(color, Y+y, X+x, Y+y+mov, X+x, papel);           
            dibujarlinea(colore, Y-y, X+x, Y-y-mov, X+x, papel);
            dibujarlinea(color, Y+y, X-x, Y+y+mov, X-x, papel);           
            dibujarlinea(colore, Y-y, X-x, Y-y-mov, X-x, papel);
        break;
        case teclas.DOWN:
            dibujarlinea(color, X+x, Y+y, X+x, Y+y+mov, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x, Y+y+mov, papel);           
            dibujarlinea(color, X+x, Y-y, X+x, Y-y-mov, papel);           
            dibujarlinea(colore, X-x, Y-y, X-x, Y-y-mov, papel);           
            y=y+mov;
            dibujarlinea(color, Y+y, X+x, Y+y-mov, X+x, papel);           
            dibujarlinea(colore, Y-y, X+x, Y-y+mov, X+x, papel);
            dibujarlinea(color, Y+y, X-x, Y+y-mov, X-x, papel);           
            dibujarlinea(colore, Y-y, X-x, Y-y+mov, X-x, papel);
        break;
        case teclas.NINE:
            dibujarlinea(color, X+x, Y+y, X+x+mov, Y+y-mov, papel);           
            dibujarlinea(colore, X-x, Y+y, X-x-mov, Y+y-mov, papel);           
            // dibujarlinea(color, X+x, Y-y, X+x, Y-y+mov, papel);           
            // dibujarlinea(colore, X-x, Y-y, X-x, Y-y+mov, papel);           
            y=y-mov
            x=x+mov
            // dibujarlinea(color, Y+y, X+x, Y+y+mov, X+x, papel);           
            // dibujarlinea(colore, Y-y, X+x, Y-y-mov, X+x, papel);
            // dibujarlinea(color, Y+y, X-x, Y+y+mov, X-x, papel);           
            // dibujarlinea(colore, Y-y, X-x, Y-y-mov, X-x, papel);
        break;
        default:
        break;           
    }
    console.log(evento.keyCode);
}

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