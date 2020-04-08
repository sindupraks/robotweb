$(document).ready(function(){
    $('.toggler--bg').click(function(){
        $('.toggler--bg').toggleClass('active');
    })
})

// Navbar Collapse
// ================================================


$('.toggler--bg').click(function(){
    $('#menu').addClass('show');
});

$('.close').click(function(){
    $('#menu').removeClass('show');
});


$('.carousel').carousel({
    interval: 2000
});

// Home Slideshow
// ================================================

$("#gallery-link").on('click', function(e){
    $('#gallery').removeClass('d-none');
    $('#home').addClass('d-none');
    $('#about').addClass('d-none');
});

$(".page-scroll").on('click', function(e){
    var href = $(this).attr('href');
    var elemenHref = $(href);

    $(this).toggleClass('active');
    $('#menu').removeClass('show');

    $('html').animate({
        scrollTop: elemenHref.offset().top
    }, 1000, 'easeInOutExpo');

    e.preventDefault();
});

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({triggerElement: '#home'})
                .setClassToggle('#home-link', "active")
                .duration(1000)
                .addTo(controller);
                
new ScrollMagic.Scene({triggerElement: '#about'})
                .setClassToggle('#about-link', "active")
                .duration(2000)
                .addTo(controller);




// Smoth Scroll
// ================================================

function openPhoto(evt, photoName){
    var x, tablinks;

    x = document.getElementsByClassName('photo');
    for (let i = 0; i < x.length; i++) {
        x[i].classList.add('d-none');
    }

    tablinks = document.getElementsByClassName('tablink');
    for (let i = 0; i < x.length; i++) {
        tablinks[i].classList.remove('active');
    }

    document.getElementById(photoName).classList.remove('d-none');
    evt.currentTarget.classList.add('active');
}