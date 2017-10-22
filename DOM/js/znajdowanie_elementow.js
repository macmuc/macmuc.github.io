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

var istniejacyWezel = document.getElementById('parSecond');
console.log(istniejacyWezel);

var newElement = document.createElement('p');

var newElementContent = document.createTextNode('To jest nowy paragraf');

newElement.appendChild(newElementContent);

console.log(newElement);

istniejacyWezel.appendChild(newElement);
istniejacyWezel.removeChild(newElement);

/*var parFirstDiv = document.getElementById('parFirst');
var linkWParagrafie = document.getElementById('parFirst').children[2];
console.log(linkWParagrafie);
parFirstDiv.replaceChild(newElement,linkWParagrafie);*/

//Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy


var allLinks = document.getElementsByTagName('a');
//console.log(allLinks);

//i = index zaczyna się od zera elementów jest sześć, więc musi być mniejszy od 6, kończy się na pięć


    
   for (var i = 0; i < allLinks.length; i++){
    var br = document.createElement ('br');
    allLinks[i].parentNode.insertBefore(br,
    allLinks[i].nextSibling);
    allLinks[i].removeAttribute('class');//usuwa atrybut klasy
    allLinks[i].setAttribute('id','link-id'+i);   
} 




