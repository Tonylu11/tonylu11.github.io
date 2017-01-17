jQuery.fn.cuentaCaracteres = function () {
    this.each(function () {
        elemento = $(this);

        let divCuenta = $("<div>Contador caracteres: " + elemento.prop("value").length + "</div>");

        elemento.after(divCuenta);
        elemento.data("campoContador",divCuenta);

        elemento.keyup(function () {
            let elemento = $(this);
            let campocontador = elemento.data("campoContador");

            campocontador.text("Contador caracteres: " + elemento.prop("value").length);
        });
    });
    return this;
};
$(document).ready(function(){
    $("textarea").cuentaCaracteres();
});