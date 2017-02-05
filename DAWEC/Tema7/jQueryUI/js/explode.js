$(document).ready(function () {
    $(".explode").on('click', function () {
        $(this).toggle("explode");
    });
    $("body").on('click', function () {
        $(".explode").show();
    })
});
