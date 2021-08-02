$(document).ready(function () {

    $("#prompt").css("height", $(window).height());
    $("#generate").css("height", $(window).height());

});

function interactNav() {
    $("#closeBtn").toggleClass("open");
    $("#menu").toggleClass("open");
    $("#caret").toggleClass("open");
}

$("#promptField > button").on('click', function (event) {
    var prompt = $("#promptField > input").val();
    var hash = $(this).data("hash");

    if (prompt) {
        generatePoem(prompt);
        if (hash) {
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 200, function () {
                window.location.hash = hash;
            });
        }
    }
    else {
        //alert
    }
});

function generatePoem(prompt) {
    $.ajax
        ({
            type: "POST",
            url: '/generatePoem',
            data: { 'prompt': prompt },
            success: function (response) {
                console.log(response.toString());
            }
        })
    return false;
}
