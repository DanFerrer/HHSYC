$(document).ready(function($){

    'use strict';

    // on submit...
    $("#submit").click(function() {

        //required:

        //name
        var name = $("#name").val();
        if(name == ""){
            alert("Please include your Name");
            $("input#name").focus();
            return false;
        }

        // email
        var email = $("#email").val();
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(email == ""){
           alert("Please include your Email Address ");
            $("input#email").focus();
            return false;
        }

        if(!filter.test(email)) {
            alert("Please enter a valid email. \n Only the following characters are allowed: \n /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/");
            $("input#email").focus();
            return false;
        }

        // web
        var web = $("#web").val();
        if(web == ""){
            alert("Web required");
            $("input#web").focus();
            return false;
        }

        // comments
        var comments = $("#comments").val();
        if (comments == "") {
            alert("Please include a Comment");
            $("textarea#comments").focus();
            return false;
        }
        // send mail php
        var sendMailUrl = $("#sendMailUrl").val();

        //to, from & subject
        var to = $("#to").val();
        var from = $("#from").val();
        var subject = $("#subject").val();

        // data string
        var dataString = 'name='+ name
            + '&email=' + email
            + '&web=' + web
            + '&comments=' + comments
            + '&to=' + to
            + '&from=' + from
            + '&subject=' + subject;
        // ajax
        $.ajax({
            type:"POST",
            url: sendMailUrl,
            data: dataString,
            success: formSuccess()
        });
    });


    // on success...
    function formSuccess() {
        alert("Your message has been submitted. Thank you!")
    }

});
