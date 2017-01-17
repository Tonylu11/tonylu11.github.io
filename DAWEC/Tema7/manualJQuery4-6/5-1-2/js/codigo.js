$(document).ready(function(){
    $("#micapa").css("color","green");

    $("#micapa").css({
        "background-color":"#FF8800",
        "position":"absolute",
        "width":"100px",
        "top":"100px",
        "left":"200px"
    });

    $("#fondogris").click(function (e) {
        e.preventDefault();
        $("#micapa").css("background-color","#999");
    });

    $("#fondonaranja").click(function (e) {
        e.preventDefault();
        $("#micapa").css("background-color","#F80");
    });

    $("#ocultarmostrar").click(function (e) {
        let capa = $("#micapa");
        let mostrandose = capa.css("display");
        if (mostrandose == "block"){
            capa.css("display", "none");
        }else{
            capa.css("display", "block");
        }
    });

    $("#micapa").mouseover(function () {
        let left = parseInt($(this).css("left"));
        $(this).css("left", left + 10 + "px");
    })

    $("#micapa").click(function(){
        $(this).css("width", function(index, value){
            var aumento = prompt("cuanto quieres aumentar?", "25");
            return (parseInt(value) + parseInt(aumento)) + "px";
        });
    })

});