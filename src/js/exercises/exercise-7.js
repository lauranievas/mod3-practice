/* 
EJERCICIO 7:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado
*/

function arrayEquals(arr1, arr2) {
    var equalsLength = arr1.length === arr2.length;
    var equals = true;

    if(equalsLength){
        for(var i=0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                equals = false;
                break;
            }
        }

        return equals;
    }else{
        return false;
    }
}

function isPalindrome(word) {
    var chars = [];
    var chars2 = [];

    for(var i = 0; i < word.length; i++){
        chars[i] = word[i];
        chars2[(word.length-1)-i] = word[i];
    }

    console.log(chars, chars, arrayEquals(chars, chars2));

    return `${arrayEquals(chars, chars2)}`
    
} 

showContent(7, isPalindrome("dax"));
