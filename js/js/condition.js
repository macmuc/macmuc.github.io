'use strict';

var wzrostMateusza = 190;
var wzrostOlgi = 190;

/*warunek if*/

if (wzrostOlgi < wzrostMateusza) {
    
    
    console.log ('Olga jest niższa');
    
}

/*warunek if-else*/

if (wzrostOlgi > wzrostMateusza) {
    
    console.log ('olga jest wyższa');
    
}

else {
    
    console.log('Olga nie jest wyższa');
    
}


/*warunek if else if */

if (wzrostOlgi > wzrostMateusza) {
    
    console.log ('Olga jest wyższa');
    
} else if (wzrostOlgi==wzrostMateusza) {
    
    console.log("Olga jest tak wysoka jak Mateusz")//else if może być wiele
    
} else {
    
    console.log('Olga jest niższa');
    
}


/* warunek switch */

var kolor = 'zielony';

switch (kolor) {
        
    case 'czerwony':
        console.log("Kolor czerwony");
        break;
        
    case 'zielony':
        console.log("Kolor zielony");
        break;
    case 'niebieski':
        console.log("Kolor niebieski");
        break;
    default:
        console.log("Inny kolor");
}