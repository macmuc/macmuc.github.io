'use strict';

var parFirst = document.getElementById('parFirst');
console.log(parFirst);

var link = document.getElementsByClassName('link');
console.log(link);

var paragrafyPoTagu = document.getElementsByTagName('p');
console.log(paragrafyPoTagu);

    for(var i =0; i < paragrafyPoTagu.length; i++) {
        
        console.log(paragrafyPoTagu[i].innerHTML);
        console.log(paragrafyPoTagu[i].outerHTML);
        
    }

var wszystkieLinki = document.querySelectorAll('link');
console.log(wszystkieLinki);

var pierwszyLink = document.querySelector('.link');
console.log(pierwszyLink);

wszystkieLinki.forEach(function(link,index){
    
    console.log(link.innerHTML);
    
    
    
})


var elementParent = document.getElementById('parFirst').parentNode;
console.log(elementParent);


console.log( document.getElementById( "parFirst" ).children );
console.log( document.getElementById( "parFirst" ).childNodes );
console.log( document.getElementById( "parFirst" ).childNodes[1] );
console.log( document.getElementById( "parFirst" ).firstChild );
console.log( document.getElementById( "parFirst" ).lastChild ); 