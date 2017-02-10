$(function(){
    $("#nombre").val(Cookies.get('nombre'));
    $("#apellidos").val(Cookies.get('apellidos'));
    $("#correo").val(Cookies.get('correo'));
    $("#telefono").val(Cookies.get('telefono'));
    $("#fentrada").val(Cookies.get('fentrada'));
    $("#fsalida").val(Cookies.get('fsalida'));
    $("#npersonas").val(Cookies.get('npersonas'));
    $("#condiciones").prop("checked",Cookies.get('condiciones'));
    $.validate({
        modules : 'toggleDisabled',
        disabledFormFilter : 'form#formReserva'

    });
    $( ".datepicker" ).datepicker({
        inline: true
    });
    $("#nuevareserva").on('click',function (e) {
        e.preventDefault();
        Cookies.set('nombre', $("#nombre").val(), { expires: 365 });
        Cookies.set('apellidos', $("#apellidos").val(), { expires: 365 });
        Cookies.set('correo', $("#correo").val(), { expires: 365 });
        Cookies.set('telefono', $("#telefono").val(), { expires: 365 });
        Cookies.set('fentrada', $("#fentrada").val(), { expires: 365 });
        Cookies.set('fsalida', $("#fsalida").val(), { expires: 365 });
        Cookies.set('npersonas', $("#npersonas").val(), { expires: 365 });
        Cookies.set('condiciones', $("#condiciones").prop("checked"), { expires: 365 });
    });
});
