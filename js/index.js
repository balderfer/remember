jQuery(document).ready(function($) {
    $("#title-input").focus();
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false
    })
});