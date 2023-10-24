/* 
EJERCICIO 5:
Escribe una función llamada "repetitions" que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
repetitions(‘code’) // result: “COoDddEeee”
repetitions(‘list’) // result: “LIiSssTttt”
repetitions(function) // result: “FUuNnnTtttIiiiiOoooooNnnnnnn”

*/
function repetitions(data) {
    let result = "";
    for(var i = 0; i < data.length; i++) {
        let caracter = data[i];
        result+=caracter.toUpperCase();
        for(var b = 0; b < i; b++){
            result+=caracter.toLowerCase();
        }
    }
    return result;
  }
  
  showContent(5, repetitions("list"));