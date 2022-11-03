var vp = document.getElementById("villa");
var papel = vp.getContext("2d");

var fondo = {
   url: "tile.png", cargaok: false
};
var vaca = {
   url: "vaca.png", cargaok: false
};
var cerdo = {
   url: "cerdo.png", cargaok: false
};
var pollo = {
   url: "pollo.png", cargaok: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarfondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarvacas);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarcerdos);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarpollos);

function cargarfondo()
{
   fondo.cargaok = true;
   dibujar();
}
function cargarvacas()
{
   vaca.cargaok = true;
   dibujar();
}
function cargarcerdos()
{
   cerdo.cargaok = true;
   dibujar();
}
function cargarpollos()
{
   pollo.cargaok = true;
   dibujar();
}

var a = 10;
var z = 10;
var cantidad = aleatorio(a, z); 
var x = aleatorio(0, 7);
var y = aleatorio(0, 14);

function dibujar()
{
   if(fondo.cargaok == true)
   {
      papel.drawImage(fondo.objeto, 0, 0);
   }
   // if(vaca.cargaok == true)
   // {
   //    console.log(cantidad);
   //    for(var i=0; i < cantidad; i++)
   //    {
   //       var x = aleatorio(0, 6);
   //       var y = aleatorio(0, 6);
   //       var x = x * 70;
   //       var y = y * 70;
   //       papel.drawImage(vaca.objeto, x, y);
   //    }
   // }
   if(cerdo.cargaok == true)
   {
      var x = x * 60;
      var y = y * 30;
      papel.drawImage(cerdo.objeto, x, y);
   }
   // if(cerdo.cargaok == true)
   // {
      // for(var i=0; i < 1; i++)
      // {
         // var x = aleatorio(0, 7);
         // var y = aleatorio(0, 14);
         // var x = x * 60;
         // var y = y * 30;
         // papel.drawImage(cerdo.objeto, x, y);
      // }
   // }
   // if(pollo.cargaok == true)
   // {
   //    for(var i=0; i < cantidad; i++)
   //    {
   //       var x = aleatorio(0, 420);
   //       var y = aleatorio(0, 420);
   //       papel.drawImage(pollo.objeto, x, y);
   //    }
   // }
}


var teclas = {
   UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39
};
document.addEventListener("keyup", moverteclado);

function moverteclado(evento)
{
   var mov = 50;
   switch(evento.keyCode)
   {
      case teclas.UP:
         function dibujar()
         {
            if(cerdo.cargaok == true)
            {
               x = x;
               y = y - mov;
               papel.drawImage(cerdo.objeto, x, y-mov);
            }
         }
         // dibujarlinea(color, x, y, x, y-mov, papel);
         // y=y-mov;
      // break;
      // case teclas.DOWN:
         // dibujarlinea(color, x, y, x, y+mov, papel);
         // y=y+mov;
      // break;
      // case teclas.LEFT:
         // dibujarlinea(color, x, y, x-mov, y, papel);
         // x=x-mov;
      // break;
      // case teclas.RIGHT:
         // dibujarlinea(color, x, y, x+mov, y, papel);
         // x=x+mov;
      // break;
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

// var z;
// for(var i=0; i<10; i++)
// {
//    z = aleatorio(0, 5);
//    document.write(z + ", ");
// }