function muestraRestantesCola(){
    let funcionesEnCola = $("#micapa").queue("cola").length;
    let funcionesEnColaPredeterminada = $("#micapa").queue().length;
    let textoMostrar = "Hay " + funcionesEnCola + " funciones de efectos en la cola 'micola'";
    textoMostrar += "<br>Hay " + funcionesEnColaPredeterminada + " funciones de efectos en la cola por defecto";
    $("#mensaje").html(textoMostrar);
}

let cambiarColores = function () {
    let capa = $("#micapa");
    capa.delay(1000, "cola");
    capa.queue("cola", function (continua) {
        $(this).css({
            "background-color": "#339"
        });
        continua();
    });
    capa.delay(1000, "cola");
    capa.queue("cola", function (continua) {
        $(this).css({
            "background-color": "#933"
        });
        continua();
    });
    capa.delay(1000, "cola");
    capa.queue("cola", function (continua) {
        $(this).css({
            "background-color": "#393"
        });
        cambiarColores();
    });
    capa.dequeue("cola");
}

let ocultaMuestra = function () {
    let capa = $("#micapa");
    capa.fadeTo(300, 0.3);
    capa.fadeTo(1200, 1);
    capa.animate({
        "left":"350px"
    });
    capa.animate({
        "left":"100px"
    },1000, ocultaMuestra);
}
$(document).ready(function(){
    cambiarColores();
    ocultaMuestra();
    $("#botontamanocola").click(function () {
        muestraRestantesCola();
    });
});