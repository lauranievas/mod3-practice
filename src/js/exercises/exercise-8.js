/* 
EJERCICIO 8:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar las funciones de ejercicios anteriores).
*/

const alphabet = "abcdefghijklmnopqrstuvwxyz";

function posInAlpha(letter) {
    var pos = -1;
    for(var i=0; i < alphabet.length; i++){
        if(alphabet[i] === letter){
            pos = i+1;
        }
    }

    return pos;
}

function convertToPos(word) {
    var lettersPos = [];

    for(const w of word){
        var letterInAlpha = posInAlpha(w);
        if(letterInAlpha > -1){
            lettersPos.push(letterInAlpha);
        }    
    }

    return lettersPos;
}
showContent(8, convertToPos("hello world"));
