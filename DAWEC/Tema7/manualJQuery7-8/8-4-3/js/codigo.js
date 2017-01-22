let colaEfectos = function () {
    let capa = $("#micapa");
    capa.animate({
        "font-size": "2em"
    }, 1500);
    capa.hide(1000);
    capa.show(1000);
    capa.animate({
        "left": "300px",
        "top": "50px"
    },1500);
    capa.animate({
        "font-size": "1em"
    },1500);
    capa.animate({
        "left": "50px",
        "top": "100px"
    },1500, colaEfectos);
}

$(document).ready(function(){
    colaEfectos();
});