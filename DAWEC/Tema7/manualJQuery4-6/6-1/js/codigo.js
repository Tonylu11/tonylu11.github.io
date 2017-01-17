$(document).ready(function(){
    $(".mienlace").click(function (e) {
        e.preventDefault();
        alert("Has hecho click\nComo he hecho preventDefault, no te llevaré a DesarrolloWeb.com");
    });
});