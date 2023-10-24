/* 
EJERCICIO 16:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
*/

function convertToSigle(year) {
    return (Math.floor(year / 100))+1;
}


showContent(16, convertToSigle(1850));