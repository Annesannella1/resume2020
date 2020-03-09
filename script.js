
$(document).ready(() => {
    $("svg-container-hover").hover(function(){
       $(this).html("backgroundopacity", "1.0");
    }, function(){
       $(this).html("opacity", "0.4");
    });
});
