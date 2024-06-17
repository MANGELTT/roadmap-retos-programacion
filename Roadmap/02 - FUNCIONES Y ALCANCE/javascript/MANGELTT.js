/*
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.*/


sexo();
let Name = "Toño";
console.log(Name);

//Funcion sin parametros y sin retorno
function sexo(){
    console.log("Usted quiere fornicar?");
    let Name = "Maria Jose Ramirez";

    baby();
    function baby(){
        console.log("Se que tu quieres papi " + Name);
    }
}

function Imprime (word1,word2){
    let i = 1;
    count = 0;
    countWord = 0;

    while (i <= 100){
        if(i % 3 == 0 && i % 5 == 0){
            console.log(word1 + word2);
            countWord++;
        }
        else if(i % 3 == 0){
            console.log(word1);
            countWord++;
        }
        else if(i % 5 == 0){
            console.log(word2);
            countWord++;
        }
        else{console.log(i); count++;}
        i++;
    }
    return console.log("i se imprimio " + count + " y las palabras " + countWord);
}

Imprime("gabagool","pepe");
