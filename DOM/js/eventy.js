'use strict';

var secondLink = document.getElementsByTagName('a')[1];


function alarm(event) {
    
    event.preventDefault();//zapobiega domyślnej akcji
    alert('kliknięto w link');
    
}

secondLink.onclick = alarm;


var thirdLink = document.getElementsByTagName('a')[2];//stosujemy ten sposób czyli addEventListener jest to dobra praktyka
thirdLink.addEventListener('click',alarm);



thirdLink.removeEventListener('click',alarm);

document.getElementsByTagName('a')[3].addEventListener('click',function(e){
                                                       
event.preventDefault();
alert('kliknięto w link [3]');

});

function klikHeader() {
    
    console.log('Kliknąłeś w header');
}
    document.getElementsByTagName('header')[0].addEventListener('click',klikHeader);
    
    


 function klikH1(e){
        
        console.log('Kliknąłeś w h1');
       
    }
        document.getElementsByTagName('h1')[0].addEventListener('click', function(e){
            
            e.stopPropagation();
            console.log('Kliknąłeś w h1')
        });       
/*w powyższy sposób zapobiegamy jednoczesnemu odpaleniu obu zdarzeń*/


                                                     