$(document).ready(function(){
    var dobleClicks = 0, clicks = 0;
    $("#micapa").dblclick(function (e) {
        dobleClicks++;
        $("#mensaje").html("<h2>Has hecho doble click</h2><h3>Número de clicks: " + clicks + "</h3>" +
            "<h3>Número de doble clicks: " + dobleClicks + "</h3>");
    });

    $("#micapa").click(function (e) {
        clicks++;
        $("#mensaje").html("<h2>Has hecho click</h2><h3>Número de clicks: " + clicks + "</h3>" +
            "<h3>Número de doble clicks: " + dobleClicks + "</h3>");
    });
});