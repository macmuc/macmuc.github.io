'use strict'

/* Pętla for */

for (var i = 10; i >0; i--) { //można dawać różne działania, trzeba uważać by nie wywołać nieskończonej pętli
    
    console.log(i);
    
    
    
}


/*Pętla forEach*/

var imiona = ['Krystian','Wojtek','Zenek'];

imiona.forEach(function (element,index){
    
    
    console.log("Element z indexem: " +index + " ma wartość " + element);
    
    
});

/*Pętla while*/

var it = 0;
while(it<10) {
    
    console.log("It " + it);
    it++
    
}

/*Pętla do...while*/ //zawsze wykona się przynajmniej raz, najpierw wykona instrukcje a potem sprawdzi warunek

var j=0;
do {
    
    console.log('Pętla do...while' + j)
    j++;
   
}while (j < 10);


/*Przerwanie break*/

var a=0;
while (a<10) {
    
    console.log('break:' + a);
    a++;
    if(a == 5) {
        
        break;
    }
    
    
    
}


/*Przerwanie - continue*/

for(var i = 0; i <10; i++){
    
    if(i == 5) {
        
        continue;
    }
    console.log('Continue ' + i);
}




for(var i =0; i < 3; i++){
    
    for(var j = 0; j < 2; j++){
        
        if(j == 2) {
            
            break; //break powoduje powrót do "wyższej" pętli
        }
        console.log('i = ' + i + ' , j = ' +j);
        
    }
    
    
}