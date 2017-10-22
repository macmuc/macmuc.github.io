'use strict';


/*document.getElementById('formularz').addEventListener('submit',function(e){
    
    e.preventDefault();
    
    
    
});

function showConsole (){
    
    
    var imie = document.getElementsByName('fname');
    
    
    
    
}*/


function pobierzImie(event) {
    
    event.preventDefault();
    
   /* console.log(document.getElementsByName('fname')[0].value);
    console.log(document.getElementsByName('lname')[0].value);*/
    var inputs = document.querySelectorAll('input[type=text]');
    
    for(var i=0; i < inputs.length; i++){
        
      console.log(inputs[i].value);  
    }
    
  
    
}