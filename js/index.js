jQuery(document).ready(function($) {
    $("#title-input").focus();
    $('textarea').keypress(function(e) {
        if (e.keyCode == 13) return false
    });
    $('textarea').live('focus', function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.scrollTo(0, 0); //the second 0 marks the Y scroll pos. Setting this to i.e. 100 will push the screen up by 100px. 
    });
});