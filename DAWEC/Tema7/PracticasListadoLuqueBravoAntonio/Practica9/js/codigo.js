/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    let animacion = function () {
        $("#p1").animate({
            "font-size" : "3em",
            "top" : "0px",
            "left" : "200px"
        },2000);
        $("#p2").animate({
            "font-size" : "3em",
            "top" : "100px",
            "left" : "200px"
        },2000);
        $("#p1").animate({
            "font-size" : "1em",
            "top" : "0px",
            "left" : "0px"
        },2000);
        $("#p2").animate({
            "font-size" : "1em",
            "top" : "100px",
            "left" : "0px"
        },2000,animacion);
    };
    animacion();
});