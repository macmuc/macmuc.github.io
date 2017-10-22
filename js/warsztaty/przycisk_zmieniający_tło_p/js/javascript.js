'use strict'
//podstawowa wersja
/*function ustawTło() {
    
    document.getElementsByTagName('p')[0].style.background = 'red';
    
    
    document.getElementsByTagName('p')[1].style.background = 'yellow';
    
    
}
    
    document.getElementById("color_change_btn").addEventListener('click',ustawTło);
*/


//inne rozwiązanie
function ustawTło() {
    
    for(var i=0; i< document.getElementsByTagName('p').length; i++){
        
        if(i % 2==0){
            document.getElementsByTagName('p')[i].style.background = 'red';
            
        }
        else{
            
            document.getElementsByTagName('p')[i].style.background = 'yellow';
            
        }
    }
    
  document.getElementById("color_change_btn").value = 'zerujTło';
    document.getElementById("color_change_btn").addEventListener('click',zerujTło);
}



function zerujTło(){
    
    for(var i=0; i< document.getElementsByTagName('p').length; i++){
        
        if(i % 2==0){
            document.getElementsByTagName('p')[i].style.background = 'none';
            
        }
        else{
            
            document.getElementsByTagName('p')[i].style.background = 'none';
            
        }
    
    
    }
    
    document.getElementById("color_change_btn").value = 'ustawTło';
     document.getElementById("color_change_btn").removeEventListener('click',zerujTło);
    document.getElementById("color_change_btn").addEventListener('click',ustawTło);
    
}









    document.getElementById("color_change_btn").addEventListener('click',ustawTło);

    //document.getElementById("reset_color_btn").addEventListener('click',zerujTło);