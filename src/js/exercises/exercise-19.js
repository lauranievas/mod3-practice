/* 
EJERCICIO 19:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}
Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/

function countKeys(data) {
    const result = {};
    data = data.toLowerCase();
  
    for (var i = 0; i < data.length; i++) {
      const key = data[i];
      if (key.match(/[a-z]/)) {
        if (result[key]) {
          result[key]++;
        } else {
          result[key] = 1;
        }
      }
    }
  
    return result;
  }
  showContent(19, countKeys("Hello world"));