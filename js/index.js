jQuery(document).ready(function($) {
    cordova.plugins.Keyboard.disableScroll(true);
    $("#title-input").focus();
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false;
    });
});