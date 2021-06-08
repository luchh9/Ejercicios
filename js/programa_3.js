'use strict';

function comprobarpassword(){

    let password = document.getElementById('contraseña').value;  
    
    let espacios = comprobarespacios(password); //true TIENE espacios, false SI NO TIENE espacios

    let signos = comprobarsignos(password);  //lo mismo con los signos

    let cantidadcaracteres = password.length;

    let cantidadmayusculas = comprobarmayusculas(password);

    let numerosunicos = comprobarnumerosrepetidos(password);

}

function comprobarespacios(pw){
    
    let password2 = pw.replace(/[^\w\s!?]/g,'');                    //quito los espacios

    if (pw != password2) { //comparo la misma password con y sin espacios
        return true
    }
    else{ 
        return false
    }
}

function comprobarsignos(pw){
    
    let password2 = pw.replace(/[^a-zA-Z0-9]/g, ''); //elimino los signos con expresion regular

    if (pw != password2) {      //comparo la misma password con o sin signos
        return true            //si son distintas, quiere decir que tiene al menos un signo, devuelve true
    }
    else{ 
        return false
    }
}

function comprobarmayusculas(pw){
    
    let cantidad = 0;
    let mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < mayusculas.length; i++) {
        for (let x = 0; x < pw.length; x++) {
            if(pw[x]==mayusculas[i]){
                cantidad+=1;
            }
        }
    }
    return cantidad
}

function comprobarnumerosrepetidos(pw){ //en esta funcion ordeno la contraseña ingresada (la transformo en un arreglo) para luego recorrerla y verificar los numeros repetidos 

    let arraypassword = Array.from(pw); //transformo el string en un array
    let numeros = 0;

    arraypassword.sort((a,b) => {  //ordeno la password
        if(a>b){
          return 1;
        }
        if(a<b){
          return -1;
        }
        return 0;
      })

    console.log(arraypassword);

    for(let i = 0; i < arraypassword.length; i++){
        if( !isNaN(arraypassword[i]) && arraypassword[i] == arraypassword[i+1] ){ //si el caracter es un numero y el proximo en el array es diferente (osea es un numero unico) suma el contador
            numeros++;
        }
    }
    console.log(numeros)
//numeros se vuelve .lengt y voy restando, === mismo tipo e igual valor 
}

document.querySelector("#boton3").addEventListener("click",comprobarpassword);