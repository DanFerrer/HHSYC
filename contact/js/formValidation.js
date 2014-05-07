jQuery(document).ready(function($){

    // hide messages
    $("#sent-form-msg").hide();

    // on submit...
    $("#contactForm #submit").click(function() {

        //required:

        //name
        var name = $("input#name").val();
        if(name == ""){
            alert("Please include your Name");
            $("input#name").focus();
            return false;
        }

        // email
        var email = $("input#email").val();
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
        var web = $("input#web").val();
        if(web == ""){
            alert("Web required");
            $("input#web").focus();
            return false;
        }

        // comments
        var comments = $("#comments").val();
            if(comments.length == 0) {
                confirm("Looks like your message is blank. Do you still want to send ?");
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
            success: success()
        });
    });


    // on success...
    function success(){
        alert("Thanks for your message!");
    }

    return false;
});
