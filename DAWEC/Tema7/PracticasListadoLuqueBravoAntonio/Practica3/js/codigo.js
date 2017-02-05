/**
 * Created by Tony on 04/02/2017.
 */
$(document).ready(function () {
    $("#activarefecto").click(animar);
});
function animar() {
    $("#caja").animate({
        "left": "400px"
    },2000);
    $("#caja").animate({
        "left": "100px"
    },2000,animar);
}