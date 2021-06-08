// Use una libreria para realizar este ejercicio  ---> https://github.com/nicofrem/silabajs
// En el link se puede ver como funciona y como es el formato del JSON

'use strict';

function dividir_en_silabas(){

    let palabra = document.getElementById('palabra_silabas').value; // el valor de la palabra ingresada
    let list2 = document.getElementById('silabas');          // la lista en la que muestro las silabas
    
    list2.innerHTML = "";

    let json = silabaJS.getSilabas(palabra);    //la funcion getSilabas() devuelve un json con muchos datos de la palabra, entre ellos las silabas

    let silabas = json.silabas;
    
    //mostrar resultado
    
    for (var i = 0; silabas.length; i++){                        //recorro las silabas para mostrarlos en la lista
        list2.innerHTML += ` <li> ${silabas[i].silaba} </li> `; 
    }
}


document.querySelector("#boton2").addEventListener("click",dividir_en_silabas);