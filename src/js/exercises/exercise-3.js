/* 
EJERCICIO 3:
Muestra el siguiente mensaje con el resultado de contar el número de vocales que tiene un string:
“Number of vowels is <result>”
*/
function greeting(data) {
    let count = 0;
    const vowels = "aeiou";
    for(const vowel of data){
        if(vowels.includes(vowel.toLowerCase())){
            count ++;
        }
    }
    return `Number of vowels is  ${count}`;
  }
  
  showContent(3, greeting("Hello my name in Laura"));