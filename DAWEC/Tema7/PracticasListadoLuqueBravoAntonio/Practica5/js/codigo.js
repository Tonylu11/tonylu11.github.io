/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    let parrafo = $(".efectos");
    let numeroEfectos;
    let funciones = $("#funciones");
    function campoCola(){
        numeroEfectos = parrafo.queue("fx").length;
    }

    $("#fadeinout").click(function(){
        parrafo.fadeOut(650);
        parrafo.fadeIn(650);
        campoCola();
    });

    $("#slideupdown").click(function(){
        parrafo.slideUp(650);
        parrafo.slideDown(650);
        campoCola();
    });

    $("#showhide").click(function(){
        parrafo.hide(1000);
        parrafo.show(1000);
        campoCola();
    });

    $("#efectoscola").click(function(){
        campoCola();
        funciones.text("Hay "+numeroEfectos+" efectos en cola");
    });
});