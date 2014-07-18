jQuery(document).ready(function($) {
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false
    })
});