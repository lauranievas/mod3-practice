/* 
EJERCICIO 6:
Genera un array de 10 números aleatorios entre 0 y 100, calcula el menor y
el mayor y muestra el resultado por pantalla
*/
function generateMinMax() {
    const nums = [];
    var resultado = "";

    for (let i = 0; i < 10; i++) {
      const num = Math.floor(Math.random() * 101); 
      nums.push(num);
    }
  
    const minimo = Math.min(...nums);
    const maximo = Math.max(...nums);
  
    // Mostrar los resultados por pantalla
    resultado += `<div>Random numbers:  ${nums.join(", ")}</div>`;
    resultado += `<div>Min value: ${minimo}</div>`;
    resultado += `<div>Max value: ${maximo}</div>`;

    return resultado
  }
  
  showContent(6, generateMinMax());
