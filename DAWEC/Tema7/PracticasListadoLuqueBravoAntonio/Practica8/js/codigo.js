/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    $("p").dblclick(function () {
        $(this).animate({
            "font-size" : "4em"
        }).hide(2000);
    });
});