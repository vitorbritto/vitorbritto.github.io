//
// CUSTOM JAVASCRIPT
// ----------------------------------------------------------------------------

'use strict';

var baseUrl = 'http://www.vitorbritto.com.br/blog/assets/css/';
// var baseUrl = 'http://localhost:4000/assets/css/';

var themeLight = document.getElementById('theme-light'),
    themeDark  = document.getElementById('theme-dark');


themeLight.onclick = function () {
    document.getElementById('theme-css').href = baseUrl + 'theme-light.css';
};

themeDark.onclick = function () {
    document.getElementById('theme-css').href = baseUrl + 'style.css';
};


$(document).ready(function(){

    // Accessibility - WAI-ARAI Roles
    $('nav').attr('role','navigation');
    $('nav ul li a').attr('role','menuitem');
    $('#header').attr('role','banner');
    $('#footer').attr('role','contentinfo');
    $('section').attr('role','region');
    $('.content').attr('role','main');
    $('.sidebar').attr('role','complementary');
    $('.alert').attr('role','alert');
    $('a.btn').attr('role','button');
    $('details, figure').attr('role', 'group');
    $('.tabs').attr('role','tablist');
    $('.search-form').attr('role','search');

    // Stuff to do as soon as the DOM is ready;

    var postLinks = $('.post-entry').find('a');

    postLinks.on('click', function() {
        $(this).attr('target', '_blank');
    });


});
