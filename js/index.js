jQuery(document).ready(function($) {
    $("#title-input").focus();
    $("#title-input").blur(function(event) {
        document.body.scrollTop = 0;
    });
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false;
    });
});