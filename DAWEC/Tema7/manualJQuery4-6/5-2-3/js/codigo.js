let dimensionCapa = function (capa) {
   capa = $(capa);
    let dimensiones = "";
    dimensiones += "Dimensiones internas (innerWidth e innerHeight): " + parseInt(capa.innerWidth())+ "x" + parseInt(capa.innerHeight());
    dimensiones += "\nDimensiones externas (outerWidth e outerHeight): " + parseInt(capa.outerWidth()) + "x" + parseInt(capa.outerHeight());
    alert(dimensiones);
}

let posicionCapa = function (capa) {
    capa = $(capa);
    let posicion = "";
    posicion += "Posición relativa al documento(offset().left y offset().top\nLEFT: " + parseInt(capa.offset().left) + "\nTOP:" + parseInt(capa.offset().top);
    posicion += "\n\nPosición si no tuviera margen(position().left y position().top:\nLEFT: " + parseInt(capa.position().left) + "\nTOP:" + parseInt(capa.position().top);
    alert(posicion);
}

$(document).ready(function(){
    $("#botondimensiones").click(function(){
        dimensionCapa("#capa1");
    });
    $("#botonposicion").click(function(){
        posicionCapa("#capa1");
    });
    $("#botontamano").click(function(){
        $("#capa1").css("width", 200);
    });
    $("#botonmargen").click(function(){
        $("#capa1").css("margin", 20);
    });
    $("#botondimensionesc2").click(function(){
        dimensionCapa("#capa2");
    });
    $("#botonposicionc2").click(function(){
        posicionCapa("#capa2");
    });
});