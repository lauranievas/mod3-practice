/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
“H, m lrnng Jvscrpt” // string original: “Hi, I am learning Javascript”
*/
function greeting(data) {
    let result = data.toLocaleLowerCase().replace(/[aeiou]/g, '');
    return result;
  }
  
  showContent(4, greeting("Hi, I am learning Javascript"));