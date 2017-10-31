'use strict';


$(document).ready(function () {


        var firstParagraph = $("p").first();
        var lastParagraph = $("p").last();

    var newButton = $('<input/>').attr({
        type: "button",
        id: "button1",
        value: "button1",

    });
  
    $(newButton).insertBefore(firstParagraph);

    var secondButton = $('<input/>').attr({
        type: "button",
        id: "button2",
        value: "button2",

    });
   
    $(secondButton).insertBefore(firstParagraph);

    $("#button1").click(function change() {

        var firstParagraph = $("p").first();
        var lastParagraph = $("p").last();

        $(lastParagraph).clone().insertBefore(firstParagraph);



        $(lastParagraph).remove();


    });


    $("#button2").click(function test() {

        var firstParagraph = $("p").first();
        var lastParagraph = $("p").last();

        $(firstParagraph).clone().insertAfter(lastParagraph);



        $(firstParagraph).remove();


    });

});