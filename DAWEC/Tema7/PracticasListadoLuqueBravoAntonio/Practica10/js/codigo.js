/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    $("#primero").slideUp(300).slideDown(300);
    $("#antonio").click(function () {
        $(this).animate({
            "font-size" : "3em",
            "top" : "300px"
        },2000).css({
            "background-color" : "orange"
        });
    });
    $("#antonio").dblclick(function () {
        $(this).animate({
            "font-size" : "1em",
            "top" : "100px"
        },2000);
        $(this).css({
            "background-color" : "transparent"
        });
    });
    $("#luque").click(function () {
        $(this).animate({
            "font-size" : "5em",
            "top" : "500px"
        },2000).css({
            "background-color" : "blue"
        });
    });
    $("#luque").dblclick(function () {
        $(this).animate({
            "font-size" : "1em",
            "top" : "150px"
        },2000).css({
            "background-color" : "transparent"
        });
    });
});