

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


function validateForm() {
    //trim serve a levare gli spazi all'inizio e alla fine
    var firstname = $("#length").val().trim();
    var lastname = $("#length2").val().trim();
    var username = $("#user").val().trim();
    var password = $("#inputPassword3").val().trim();
    var password2 = $("#inputPassword4").val().trim();
    var email = $("#mail").val().trim();

    if ( firstname.length < 4) {
        $("#lenght").addClass("is-invalid");

        return false;     
    }

    if ( lastname.length < 4) {
        $("#lenght2").addClass("is-invalid");

        return false;
    }

    if ( username.length < 7 || username.length > 20) {

        return false;
    }
    
    if (password != password2) {

        return false;
    }

    if (!validateEmail(email)) {

        return false;
    }

    if ($("#form").hasClass("is-invalid")){
        alert ("Username is alredy exist");
        return false;
    }

    return true;
};

$("#form").submit(function(e){

    if (!validateForm()) {
        e.preventDefault();
    }
 });


$("#user").on("blur", function (){

    var el = $(this),
        form = $("#form"); 

    $.ajax({
        url: "form/username.php",
        method: "post",
        data: {
            "username": $(this).val()
        },
        success: function(data) {
            if (data.valid) {
                form.removeClass("is-invalid").addClass("is-valid");
                el.removeClass("is-invalid").addClass("is-valid");
            } else {
                el.removeClass("is-valid").addClass("is-invalid");
                form.removeClass("is-valid").addClass("is-invalid");
            }
        },
        dataType: "json"
    });
});

var pendente = false;

$(".input").keyup(function () {
    var value = $(this).val().trim();
    $(this).val(value);
})

$("#mail").on("input", function () {

   var email = $(this).val().trim();
   var el = $(this);

   if (validateEmail(email)) {
       if (!pendente) {
            $.post(
                "form/email.php",
                {
                    email: email
                },
                function (data) {
                    if (!data.valid) {
                        el.removeClass("is-valid");
                        el.addClass("is-invalid");
                    } else {
                        el.removeClass("is-invalid");
                        el.addClass("is-valid");
                    }

                    pendente = false;
                },
                "json"
            );

            pendente = true;
        }
   } else {
       el.removeClass("is-valid");
       el.addClass("is-invalid");
   }
   
    
});
