let cola = function () {
    let funcCola = $("#micapa").queue("colaPrueba").length;
    $("#mensaje").text("En el momento de hacer el último clic en los botones hay "
    + funcCola + " funciones de efectos en cola");
}

$(document).ready(function(){
    $("#botonfade").click(function () {
        let capa = $("#micapa");
        capa.fadeOut(1000);
        capa.fadeIn(1000);
        cola();
    });

    $("#botonslide").click(function () {
        let capa = $("#micapa");
        capa.slideUp(1000);
        capa.slideDown(1000);
        cola();
    });

    $("#botonslide").click(function () {
        let capa = $("#micapa");
        capa.slideUp(1000);
        capa.slideDown(1000);
        cola();
    });

    $("#botontamanocola").click(function () {
        cola();
    });
});