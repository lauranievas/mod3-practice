/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "Programando en Javascript" se transforma en "#ProgramandoEnJavascript"
*/


function changeToHashtag(data) {
    const words = data.split(' ');
    const hashtag = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
  const result = `#${hashtag}`;
    return result;
  }
  
  showContent(18, changeToHashtag("Programando en Javascript"));