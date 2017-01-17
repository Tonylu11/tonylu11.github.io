jQuery.fn.creaTip = function (textoTip, opciones) {
    var config = {
        velocidad: 500,
        animacionMuestra: {
            width: "show"
        },
        animacionOculta: {
            opacity: "hide"
        },
        claseTip: "tip"
    }
    jQuery.extend(config,opciones);

    this.each(function () {
        elemento = $(this);

        let miTip = $("<div class='" + config.claseTip + "'>" + textoTip + "</div>");

        $(document.body).append(miTip);
        elemento.data("capatip",miTip);

        elemento.mouseenter(function (e) {
            let miTip = $(this).data("capatip");
            miTip.css({
                left: e.pageX + 10,
                top: e.pageY + 5
            });
            miTip.animate(config.animacionMuestra, config.velocidad);
        });
        elemento.mouseleave(function (e) {
            let miTip = $(this).data("capatip");
            miTip.animate(config.animacionOculta,config.velocidad);
        });
    });
    return this;
};
$(document).ready(function(){
    $("#elemento1").creaTip("todo bien...");
    $("#elemento2").creaTip("Otra prueba...", {
        velocidad: 1000,
        claseTip: "otroestilotip",
        animacionMuestra: {
            opacity: "show",
            padding: '25px',
            'font-size': '2em'
        },
        animacionOculta: {
            height: "hide",
            padding: '5px',
            'font-size': '1em'
        }
    });
});