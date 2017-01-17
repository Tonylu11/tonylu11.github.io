$(document).ready(function(){
    $("input.fecha").prop("value",function(indiceArray){
        let fecha = new Date();
        return fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    });
});