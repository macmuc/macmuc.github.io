$(function(){
    
    if($(window).scrollTop()>=50){
            
            $("#main-nav").addClass("scroll");}
    
    $(window).scroll(function(){
        if($(window).scrollTop()>=50){
            
            $("#main-nav").addClass("scroll");
            $("#main-nav").css({"transition":"all 0.5s"});
        }else{$("#main-nav").removeClass("scroll");}
        
        
    });
    
    
    
});


$(function buttonAddCaption(){
    
    $("#header_button").click(function(){
        
        $("#header_additional_caption").css("opacity","1");
        
    });
    
    
});