/*$(document).ready(function() {
    $(".dropdown-toggle").dropdown();
});*/
$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
    });
    $('.albums-regular').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.button-prev1'),
        nextArrow: $('.button-next1'),
    });
    $('.albums-on-sale').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true,
        prevArrow: $('.button-prev2'),
        nextArrow: $('.button-next2'),
    });
});
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}