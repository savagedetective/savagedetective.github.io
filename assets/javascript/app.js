//this is just here so the file commits

$(document).ready(function() {

    $(window).scroll(function(){

        if ($(window).scrollTop() > $("#about-me-page").height()) {

            $("#navigation-bar").addClass('fixed');

        } 
        
        else {

            $("#navigation-bar").removeClass('fixed');
        }
        
    //sticky nav close
    });

//document ready close
});