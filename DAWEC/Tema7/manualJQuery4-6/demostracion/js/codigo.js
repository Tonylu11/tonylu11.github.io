$(document).ready(function () {
    $("#formcheckbox>input").change(function () {
        let cadena = "(:checked) Has elegido: ";
        let cadenaProp = "(prop()) Has elegido: ";
        let cadenaAttr = "(attr()) Has elegido: ";
        $("#formcheckbox>input:checked").each(function () {
            cadena += $(this).val() + " ";
            cadenaProp += $(this).prop("checked") + " ";
            cadenaAttr += $(this).attr("checked") + " ";
        });
        $("#textoCheckBox").text(cadena);
        $("#textoCheckBox2").text(cadenaProp);
        $("#textoCheckBox3").text(cadenaAttr);
    }).trigger("change");

    $("#formRadioButton").change(function () {
        let cadena = "(:checked) Has elegido: ";
        let cadenaProp = "(prop()) Has elegido: ";
        let cadenaAttr = "(attr()) Has elegido: ";
        $("#formRadioButton input:checked").each(function () {
            cadena += $(this).val() + " ";
            cadenaProp += $(this).prop("checked") + " ";
            cadenaAttr += $(this).attr("checked") + " ";
        });
        $("#textoRadioButton").text(cadena);
        $("#textoRadioButton2").text(cadenaProp);
        $("#textoRadioButton3").text(cadenaAttr);
    }).trigger("change");
    $("#punto5").click(function (event) {
        $("#textopunto5").text(
            "X: " + event.pageX +
            ", Y: " + event.pageY +
            ", currentTarget: " + event.currentTarget +
            ", timeStamp: " + event.timeStamp);
    });
});