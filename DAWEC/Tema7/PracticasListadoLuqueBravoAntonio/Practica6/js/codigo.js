/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    let listaParpadea = $(".parpadear");
    let botonParpadea = $("#botonparpadea");
    botonParpadea.click(function () {
        listaParpadea.each(function () {
            $(this).css({"color" : "green"})
                .fadeOut(500, function () {
                    $(this).fadeIn(500)
                        .css({"color":"yellow"});
                });
        });
    });
    listaParpadea.each(function () {
        $(this).css({"color" : "green"})
            .fadeOut(500, function () {
                $(this).fadeIn(500)
                    .css({"color":"yellow"});
            });
    });
});