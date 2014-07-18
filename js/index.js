jQuery(document).ready(function($) {
    $("#title-input").focus();
    $("body").on('focus', '#title-input', function(event) {
        event.preventDefault();
        document.body.scrollTop = 0;
    });
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false;
    });
});