/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    $("#activarefecto").click(animar);
});
let animar = function () {
    $("#cuadrado1").slideUp("slow").delay("5000").slideToggle("slow");
    $("#cuadrado2").slideUp(2000, function () {
        $(this).slideDown(2000);
    });
}