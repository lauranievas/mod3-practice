/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Calcula el Fib de un número pasado como parámetro y muestra un mensaje:2
"El vigésimo número de la serie de Fibonacci es 6765"

Nota: evita calcular números altos.
*/

function fibonacci(n) {

    if (n < 0) {
      return "El número de Fibonacci no está definido para valores negativos.";
    } 
    else if (n === 0) {
      return "El primer número de la serie de Fibonacci es 0.";
    } 
    else if (n === 1) {
      return "El segundo número de la serie de Fibonacci es 1.";
    }

  
    let a = 0;
    let b = 1;
    let result = 0;
  
    for (let i = 2; i <= n; i++) {
      result = a + b;
      a = b;
      b = result;
    }
  
    return `El ${n}-ésimo número de la serie de Fibonacci es ${result}`;
  }
  
  showContent(20, fibonacci(10));