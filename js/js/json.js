'use strict'

var jsonOsoby = {
    
    'osoby': [
        {
            imie: 'Krystian',
            nazwisko:'Dziopa',
            wzrost: 180,
            zainteresowania : [
                
                {nazwa:'podróże'},
                {nazwa:'gotowanie'} //wtyczka do google chrome json viewer, pozwala podejrzeć to w przeglądarce
                
            ]
        },
        
        {
            imie:'Dominik',
            nazwisko:'Gomuła',
            wzrost:167,
            zainteresowania: [
                
                {nazwa:'książki'},
                {nazwa:'pływanie'}
                
            ]
        
        
        
        },
        
        
    ]
    
}

console.log(jsonOsoby.osoby[0].imie);

jsonOsoby.osoby.forEach(function(element,index){
    
    console.log(element.imie);
    
    
});