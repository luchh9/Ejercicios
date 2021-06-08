'use strict';

function contarCaracteres() {  //cuento los caracteres de la string recorriendola sin transformarla en array
  
  let str = document.getElementById('palabra').value; //value del input text
  let list = document.getElementById('lista');
  
  list.innerHTML = "";

  ordenar(str);

  str = str.replace(/\s/g, "");               
  
  let final = {}                                    //creo un obj donde voy a guardar todo

  for(let char in str){                               //indice de cada caracter
	  if(str[char] in final) {                      //si existe aumentamos el contador
      final[str[char]] = final[str[char]] + 1
	  } else {                                          
      final[str[char]] = 1
    }
  }
  //mostrar todo
  Object.keys(final).forEach(function(letra){     //for each del objeto con sus propiedades
    list.innerHTML += `<li>La cantidad de ${letra} es: ${final[letra]}</li>` 
  })  
}

function ordenar(palabra){ //transformo la string en un array y ordeno con el metodo .sort

  let array = Array.from(palabra);  //transformo la palabra a un array
  let list = document.getElementById('lista');

  array.sort((a,b) => {  //ordeno 
    if(a>b){
      return 1;
    }
    if(a<b){
      return -1;
    }
    return 0;
  });

  array.forEach(function(letra){
    list.innerHTML += `${letra}`   

  })
}

document.querySelector("#boton1").addEventListener("click",contarCaracteres);