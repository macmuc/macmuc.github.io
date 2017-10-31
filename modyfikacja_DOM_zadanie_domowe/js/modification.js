'use strict';





$(document).ready(function(){

$("#button1").click(function change(){
   
    var firstParagraph = $("p").first();
    var lastParagraph = $("p").last();
    $(lastParagraph).clone().insertBefore(firstParagraph);
    
    

    $(lastParagraph).remove();
    
   
    
    
    
    
});
    
    
    $("#button2").click(function test(){
   
    var firstParagraph = $("p").first();
    var lastParagraph = $("p").last();
    $(firstParagraph).clone().insertAfter(lastParagraph);
    
    

    $(firstParagraph).remove();
    
    
});
    
    });