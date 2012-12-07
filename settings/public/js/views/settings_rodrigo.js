/*jslint
    onevar: false, undef: true, newcap: true, nomen: false, es5: true,
    regexp: false, plusplus: true, bitwise: true, browser: true, indent: 4 */
/*global _, $, jQuery, window, App, Backbone*/
$(function () {
    var $checkboxes = $('input.checkbox');
    $checkboxes.iphoneStyle({
        containerClass: 'iPhoneCheckContainer checkbox', 
        resizeContainer: false, 
        resizeHandle: false, 
        handleClass: 'iPhoneCheckHandle handle'
    });
    $('.tab li a').click(function(event) {        
        var href = $(this).attr('href');
        event.preventDefault();
        $(this).closest('ul').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.box .tabbed').fadeOut(100);
        $(href).delay(150).fadeIn(300);        
    });
    $('.sub-tab li a').click(function(event) {        
        var href = $(this).attr('href');
        event.preventDefault();        
        $(this).closest('ul').find('li').removeClass('active');
        $(this).parent('li').addClass('active');
        $('.sub-tabbed').fadeOut(100);
        $(href).delay(150).fadeIn(300);        
    });
    $('a.action').click(function(event) {
        event.preventDefault();
        $(this).hide();
        $(this).closest('.form-box').addClass('active');
        $(this).next('.form').slideToggle(400);        
    });
    $('a.cancel').click(function(event) {
        event.preventDefault();
        $(this).parents('.form-box').find('a.action').delay(400).fadeIn(100);        
        $(this).closest('.form-box').removeClass('active');
        $(this).parents('.form').slideToggle(400);
    });
});