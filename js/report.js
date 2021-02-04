$(document).ready(function(){
    if (localStorage.getItem("cookieSeen") != "shown") {
        $(".cookie").delay(2000).fadeIn(1000);
        localStorage.setItem("cookieSeen","shown")
    };
    $('.close').click(function() {
        $('.cookie').fadeOut(1000);
    })
      
    $('#form').on('submit', function(event){
        event.preventDefault();
        $('#alert').text('Wysyłanie...').fadeIn(0); 
        grecaptcha.ready(function () { 
            grecaptcha.execute("6Lf3gN0ZAAAAAFigQf9h9w_8JErT76P02PaPLwXQ", { action: "contact" }).then(function (token) { 
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
                $.ajax({
                    type: "POST",
                    url: "https://erykmroczko.pl/server.php",
                    data: $('#form').serialize(),
                    dataType: 'json',
                    
                    success: function( _response ){
                        var error = _response.error;
                        var success = _response.success;
                        if(error != null) {
                            $('#alert').text(error);
                        }
                        else {
                            $('#alert').text(success);
                            $('#submit-button').remove();
                        }
                    },
                    error: function(jqXhr, json, errorThrown){
                        var error = jqXhr.responseText;
                        $('#alert').html(error);
                    }
                });
            }); 
        });
        
    });
});

