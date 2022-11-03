var texto =document.getElementById("textolineas");
var botoncito=document.getElementById("boton");
botoncito.addEventListener("click", dibujoPorClick);


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
function dibujoPorClick()
{
    var x = parseInt(texto.value);
    var ancho = parseInt(d.width);
    var lineas = x;
    var l = 0;
    var yi=0;
    var xf=0;
    var colorcito="#AAF";
    for(l=0; l < lineas; l++)
    {
        dibujarlinea(colorcito,0 , yi, xf, ancho);
        yi=yi+ancho/lineas
        xf=xf+ancho/lineas
    }
    dibujarlinea(colorcito, 1, 1, 1, ancho);
    dibujarlinea(colorcito, 1, ancho-1, ancho-1, ancho-1);
}





// while(l < lineas)
// {
//     dibujarlinea(colorcito,0 , yi, xf, 300);
//     yi=yi+10
//     xf=xf+10
//     l=l+1
// }

// dibujarlinea("#AAF", 0, 0, 10, 300);
// dibujarlinea("#AAF", 0, 10, 20, 300);
// dibujarlinea("#AAF", 0, 20, 30, 300);
// dibujarlinea("#AAF", 0, 30, 40, 300);
// dibujarlinea("#AAF", 0, 40, 50, 300);
// dibujarlinea("#AAF", 0, 50, 60, 300);
// dibujarlinea("#AAF", 0, 60, 70, 300);
// dibujarlinea("#AAF", 0, 70, 80, 300);