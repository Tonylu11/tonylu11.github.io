$(document).ready(function(){
    $("p").on("click mouseenter mouseleave", function (e) {
        if ($(this).css("color")!="rgb(250, 100, 0)")
            $(this).css("color", "rgb(250, 100, 0)");
        else
            $(this).css("color", "rgb(150, 0, 255)");
    });
    let clicks = function(){
        alert("Has hecho click");
    }
    $(".miclase").on("click", clicks);
    $("#quitarevento").on("click", function(){
        $(".miclase").off("click", clicks);
    });
});