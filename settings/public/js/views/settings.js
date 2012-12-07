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
});