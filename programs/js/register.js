/**
 * Created by Daniel on 5/13/14.
 */

$(document).ready(function($) {

    'use strict';

    $("#submit").click(function() {

        var first_name = $("input#first_name").val();
        var last_name = $("input#last_name").val();
        var school_job = $("input#school_job").val();
        var male = $("input#male").val();
        var female = $("input#female").val();
        var age = $("input#age").val();
        var city = $("input#city").val();
        var state = $("input#state").val();
        var zip = $("input#zip").val();
        var phone = $("input#phone").val();
        var housing_development = $("input#housing_development");
        var email = $("input#email");
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if (first_name == "") {
            alert("Please include your first name");
            $("input#first_name").focus();
            return false;
        }
    });

});