
jQuery('document').ready(function() {
    jQuery('div#guest-user-bar').hover(
            function() {jQuery('div#guest-user-dropdown-bar').show();},
            function() {jQuery('div#guest-user-dropdown-bar').hide();}
        );
});