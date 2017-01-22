$(document).ready(function () {
    if(screen.width < 500){
        $("#icono").click(function (evento) {
            let filtro = $("aside");
            filtro.fadeToggle(500, function () {

            });
            $("#botonFiltro").css({
                "background-color":"transparent"
            });
            $("#icono").css({
                "display":"none"
            });

            filtro.css({
                "display" : "block"
            });
        });
        $("aside").mouseleave(function (evento) {
            let filtro = $("aside");
            filtro.fadeToggle(500, function () {
                filtro.css({
                    "display" : "none"
                });
            });
            $("#botonFiltro").css({
                "background-color":"rgba(129,145,66,0.7)"
            });
            $("#icono").css({
                "display":"block"
            });
        });
    }else{
        $("aside").css({
            "display":"block"
        });
    }

});