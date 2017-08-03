$(document).ready(function () {
    $('.green a').mouseout(function () {
        $('.boxes a').css('transition', 'background .8s ease');
    });
    $('li a ').mouseout(function () {
        $('.nav>li>a').css('transition', 'background 0.5s ease');
    });
    $('.main-nav .first').click(function () {
        $('.drop-down-container').toggleClass('visible');
    });
    $('.main-nav .sec').click(function () {
        $('.drop-down-container-sec').toggleClass('visible')
    });
    $('.main-nav .rd').click(function () {
        $('.drop-down-container-rd').toggleClass('visible');
    });
    $('.main-nav .fth').click(function () {
        $('.drop-down-container-fth').toggleClass('visible');
    });
    $('.main-nav .fvth').click(function () {
        $('.drop-down-container-fvth').toggleClass('visible');
    });


    if ($(window).width() > 1200) {
        $('.drop-down-container,  .drop-down-container-sec, .drop-down-container-rd, .drop-down-container-fth, .drop-down-container-fvth').removeClass('d-n');
    }
    else  if ($(window).width() < 768) {
        $('.main-nav').css('height', 'auto').css('background', '#2d343e')
    }
       else  {

    }

          // MAP SETTINGS
    function initMap() {
        var centerLatLng = new google.maps.LatLng(41.3300434, 69.2794418);
        var mapOptions = {
            center: centerLatLng,
            zoom: 8
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }
    google.maps.event.addDomListener(window, "load", initMap);

   var globalvar;
    /**
     * Connet Ajax libary
     * Action 3
     * Js stage first term
     * Code canyon stat
     * 4 temr
     */

});







