'use strict'
let who  = ['Yo','El metro','Mi mamá','Los profesores'];
let what = ['no escuche la alarma','se quedo sin servicio','no me dejo salir de casa','cerraron las vias'];
let when = ['esta mañana','en la linea 1','en todo el dia','cuando venia en camino'];

let index_one =Math.floor(Math.random()*who.length);
let index_two =Math.floor(Math.random()*what.length);
let index_three =Math.floor(Math.random()*when.length);




document.getElementById("excusas").innerHTML = who[index_one]+ " "+what[index_two]+" "+when[index_three];
