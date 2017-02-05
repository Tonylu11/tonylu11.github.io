/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    $("#activarefecto").click(animar);
    $("#revertirefecto").click(revertir);
});
let animar = function () {
    $("#efecto1").animate({
        "width" : "300px",
        "height" : "300px"
    },1000, function () {
        $("#efecto1").html("<p>Esto se ejecuta despues de la animación</p>");
    })
}

let revertir = function () {
    $("#efecto1").animate({
        "width":"100px",
        "height":"50px"
    },1000, function () {
        $("#efecto1").html("");
    })
}