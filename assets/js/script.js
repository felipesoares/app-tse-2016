$(document).ready(function() {
    if (typeof($.fn.mask) == "function") {
        $("input[data-mask='cpf']").mask("999.999.999-99");
    }
    $('.selectpicker').selectpicker({
      dropupAuto: false
    });
});
