$(function(){
    
    
    
    $(window).scroll(function(){
        if($(window).scrollTop()>=50){
            
            $("#main-nav").addClass("scroll");
            
        }else{$("#main-nav").removeClass("scroll");}
        
        
    });
    
    
    
});