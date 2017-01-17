jQuery.fn.checkboxPersonalizado = function (opciones) {
    var config = {
        activo:true,
        colorTextos:{
            activo: "#00F",
            pasivo: "#669"
        },
        textos: {
            activo: "",
            pasivo: ""
        },
        imagen: {
            activo: "images/thumb_up.png",
            pasivo: "images/thumb_down.png"
        },
        cssElemento: {
            padding: "2px 2px 2px 24px",
            display: "block",
            margin: "2px",
            border: "1px solid #EEE",
            cursor: "pointer"
        },
        cssAdicional: {

        },
        nameCheck: ""
    };
    jQuery.extend(config,opciones);

    this.each(function () {
        let elemento = $(this);
        let activo = config.activo;
        let checkElem = $("<input type='checkbox' style='display:none;'/>");
        if (config.nameCheck == ""){
            checkElem.prop("name",elemento.text());
        }else{
            checkElem.prop("name",config.nameCheck);
        }
        elemento.before(checkElem);
        elemento.css(config.cssElemento);
        elemento.css(config.cssAdicional);

        if(activo){
            activar();
        }else{
            desactivar();
        }
        elemento.click(function (e) {
            if (activo){
                desactivar();
            }else{
                activar();
            }
            activo = !activo;
        });

        function desactivar() {
            elemento.css({
                background: "transparent url(" + config.imagen.pasivo + ") no-repeat",
                color: config.colorTextos.pasivo
            });
            if (config.textos.pasivo != ""){
                elemento.text(config.textos.pasivo);
            }
            checkElem.removeProp("checked");
        };

        function activar() {
            elemento.css({
                background: "transparent url(" + config.imagen.activo + ") no-repeat",
                color: config.colorTextos.activo
            });
            if (config.textos.activo != ""){
                elemento.text(config.textos.activo);
            }
            checkElem.prop("checked" , 1);
        };
    });
    return this;
};
$(document).ready(function(){
    $(".ch").checkboxPersonalizado();
    $("#otro").checkboxPersonalizado({
        activo: false,
        colorTextos: {
            activo: "#f80",
            pasivo: "#98a"
        },
        imagen: {
            activo: 'images/weather_cloudy.png',
            pasivo: 'images/weather_rain.png'
        },
        textos: {
            activo: 'Buen tiempo :)',
            pasivo: 'Buena cara ;)'
        },
        cssAdicional: {
            border: "1px solid #dd5",
            width: "100px"
        },
        nameCheck: "buen_tiempo"
    });
});