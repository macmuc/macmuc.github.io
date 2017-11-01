'use strict';


var newButton = $("<input/>").attr({
    type: "button",
    value: "button",
    id: "button1"


});
$("body").append(newButton);


var newDiv = $("<div></div>").attr({

    id: "kwadrat",


});
$(newDiv).css({
    "position": "relative",
    "background-color": "red",
    "width": "200px",
    "height": "200px",
    "margin-top": "15px"
});




$("#button1").after(newDiv);

$("#button1").click(function () {


    $("#kwadrat").animate({

        left: "100px",
        width: "100px",
        height: "100px"


    }, "3s", function kolor() {
        console.log("test");
        document.getElementById("kwadrat").style.backgroundColor = "blue";
        $("#kwadrat").addClass("blue");



    });



    $(newDiv).append("<h2>Animacja zakończona</h2>");

    $("h2").css({
        "font-size": "14px",
        "opacity": "0"

    });

    $("h2").delay(5000).animate({

        opacity: "1"


    }, );

});