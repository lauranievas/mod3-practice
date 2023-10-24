/* 
EJERCICIO 17:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje:
"la cadena 'hola mundo' no es un isograma"
*/

function isIsogram(word) {
    var map = new Map();

    for(const w of word){
        var n = map.get(w);
        if(n === undefined) {
            map.set(1);
        }else{
            map.set(n+1);
        }
    }

    var val = -1;
    var is = true;

    for(const w of word){
        var n = map.get(w);
        if(val == -1){
            val = n;
        }else{
            if(n === val){
                continue;
            }else{
                is = false;
                break;
            }
        }
        
    }

    return `La cadena '${word}' ${!is ? "no":""} es un isograma`;
}

showContent(17, isIsogram("hoola"));