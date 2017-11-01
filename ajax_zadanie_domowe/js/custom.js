'use strict';

$(document).ready(function () {


    $("#button1").click(function pobierz() {

        $.getJSON("http://echo.jsontest.com/imie/Piotr/nazwisko/Lewinski/zawod/Programista/firma/Akademia108",function (data) {
            console.log(data);
            
            
    var newDiv = $('<div></div>').attr({
        
        id: "pobierz-dane",
        
    });
   
            
    var newP = $('<p></p>');
   
            $("#button1").after(newDiv);
            $(newDiv).append(newP);
            $(newP).text("imie: " + data.imie +", nazwisko: "+ data.nazwisko + ", zawod: "+ data.zawod +", firma: "+ data.firma)
        });


    })



});