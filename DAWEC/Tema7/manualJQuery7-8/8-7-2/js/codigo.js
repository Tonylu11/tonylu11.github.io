$(document).ready(function(){
    $("#botoncomenzar").click(function(){
        let capa = $("#micapa");
        capa.queue(function(continua){
            $("button.botondetener").show(1000);
            continua();
        });
        capa.animate({"left": "100px"}, 3000);
        capa.animate({"left": "300px"}, 3000);
        capa.queue(function(continua){
            $("button.botondetener").hide(1000);
            continua();
        });
    });
    $("#botonparar").click(function(){
        $("#micapa").stop();
    });
    $("#botonpararllegar").click(function(){
        $("#micapa").stop(false, true);
    });
    $("#botonparartodo").click(function(){
        $("#micapa").queue([]);
        $("#micapa").stop();

        alert("Lo he parado todo!, ni se ocultarán los botones de parar. Pasos encolados: " + $("#micapa").queue().length)
    });
});