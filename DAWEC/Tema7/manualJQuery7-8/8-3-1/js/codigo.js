$(document).ready(function(){
    $("#ocultartoda").click(function (e) {
        $("#milista").fadeOut();
    });

    $("#mostrartoda").click(function (e) {
        $("#milista").fadeIn();
    });

    $("#ocultarmostrar").click(function (e) {
        $("#milista").fadeOut(function () {
            $(this).fadeIn();
        });
    });

    $("#selopacidad").change(function (e) {
        let op = e.target.options[e.target.selectedIndex].value;
        $("h1").fadeTo(1000, op);
    });

    $("#pororden").click(function (e) {
        let op = $("#selopacidad").prop("value");
        $("#e1").fadeTo(400,op, function () {
            $("#e2").fadeTo(400,op, function () {
                $("#e3").fadeTo(400,op);
            });
        });
    });
});