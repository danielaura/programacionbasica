var vp = document.getElementById("villa");
var papel = vp.getContext("2d");
var teclas = {
    UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};
var fondo = {
    url: "tile.png", cargaok: false
};
var vaca = {
    url: "vaca.png", cargaok: false, x : [], y :[] 
};
var cerdo = {
    url: "cerdo.png", cargaok: false, x :  , y : 0
};
var vacalista = false;
var fondolisto = false;

var a = 5;
var z = 5;
var cantidad = aleatorio(a, z); 

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdos);

function cargarfondo()
{
    fondo.cargaok = true;
    dibujar();
    fondolisto = true;
}
function cargarvacas()
{
    vaca.cargaok = true;
    dibujar();
    vacalista = true;
}
function cargarcerdos()
{
    while(fondolisto == true)
    {
        console.log(fondolisto);
        cerdo.cargaok = true;
        dibujarcerdo();
        fondolisto = false;
    }
}
console.log(fondolisto);



function dibujarcerdo()
{
    if(cerdo.cargaok == true, fondo.cargaok == true)
    {
        papel.drawImage(cerdo.objeto, x, y);
    }
}
function dibujar()
{
    if(fondo.cargaok == true)
    {
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if(vaca.cargaok == true, fondo.objeto == true)
    {
        for(var i=0; i < cantidad; i++)
        {
            var x = (aleatorio(0, 6)*70);
            var y = (aleatorio(0,6)*70);
            vaca.x[i] = x;
            vaca.y[i] = y;
            papel.drawImage(vaca.objeto, x, y);
            console.log(cantidad);
        } 
    }
}

document.addEventListener("keyup", moverteclado);

function moverteclado(evento)
{
    console.log(x);
    console.log(y);
    var mov = 30;
    switch(evento.keyCode)
    {
        case teclas.UP:
            x = x;
            y = y - mov;
            cargarcerdos();
        break;
        case teclas.DOWN:
            x = x;
            y = y + mov;
            cargarcerdos();
        break;
        case teclas.LEFT:
            x = x - mov;
            y = y;
            cargarcerdos();
        break;
        case teclas.RIGHT:
            x = x + mov;
            y = y;
            cargarcerdos();
        break;
        default:
        break;
    }
}

function aleatorio(min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}