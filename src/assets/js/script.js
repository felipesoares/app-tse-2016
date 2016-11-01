var loadPage = function() {
  if (typeof($.fn.mask) == "function") {
    $("input[data-mask='cpf']").mask("999.999.999-99");
  }
  $('.selectpicker').selectpicker({
    dropupAuto: false
  });
}
$(document).ready(function() {
  loadPage();
});
