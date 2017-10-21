'use strict'


function mnozenie(parametr1,parametr2,parametr3) {
    
    var wynik = parametr1 * parametr2 * parametr3;
    return parametr1 * parametr2 * parametr3;//albo "return wynik"
}

var wynikGlobalny= mnozenie(3,4,5);


console.log(wynikGlobalny);