/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    function efectosVarios(){
        let capa = $("#capadiv");
        capa.animate({
            "font-size" : "4em"
        },1000);
        capa.animate({
            "left" : "200px",
            "bottom" : "100px"
        },1000);
        capa.animate({
            "font-size" : "1.5em"
        },1000);
        capa.hide(1000);
        capa.show(1000);
        capa.animate({
            "left" : "50px",
            "bottom" : "50px"
        },1000,efectosVarios);
    }
    efectosVarios();
});