let evento = function (evento) {
    $("#loescrito").html($("#loescrito").html() + evento.type + ": " + evento.which + ", ");
}
$(document).ready(function(){
    $(document).keypress(evento);
    $(document).keyup(evento);
    $(document).keydown(evento);
});