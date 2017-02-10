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
    $.datepicker.regional['es'] = {
        closeText: 'Cerrar',
        prevText: '< Ant',
        nextText: 'Sig >',
        currentText: 'Hoy',
        monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
        dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
        dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
        weekHeader: 'Sm',
        dateFormat: 'dd/mm/yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: ''
    };
    $.datepicker.setDefaults($.datepicker.regional['es']);
    $("#fentrada").datepicker({
        onClose: function (selectedDate) {
            $("#fsalida").datepicker("option", "minDate", selectedDate);
        }
    });
    $("#fsalida").datepicker({
        onClose: function (selectedDate) {
            $("#fentrada").datepicker("option", "maxDate", selectedDate);
        }
    });
});
