//
// CUSTOM JAVASCRIPT
// ----------------------------------------------------------------------------

'use strict';

var $url    = 'http://www.vitorbritto.com.br/blog/assets/css/',
    $light  = document.getElementById('theme-light'),
    $dark   = document.getElementById('theme-dark');

$light.onclick = function () {
    document.getElementById('theme-css').href = $url + 'theme-light.css';
};

$dark.onclick = function () {
    document.getElementById('theme-css').href = $url + 'style.css';
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

    var $link = $('.post-entry').find('a');

    $link.on('click', function() {
        $(this).attr('target', '_blank');
    });


});
