$(document).ready(function(){
    
    $("#slider-hero").owlCarousel({
        loop: true,
        nav: true,
        //mouseDrag: false,
        items: 1,
        dots: false,
        margin: 0,
        navText: [
            '<i class="fas fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        navContainer: "#slider-hero-nav",
    });
    $("#pengurus-slider").owlCarousel({
        loop: true,
        nav: true,
        //mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            '<i class="fas fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        navContainer: "#slider-tools-1",
    });
    $("#galeri-slider").owlCarousel({
        loop: true,
        nav: true,
        //mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
            '<i class="fas fa-angle-left" aria-hidden="true"><i>',
            '<i class="fas fa-angle-right" aria-hidden="true"><i>',
        ],
        navContainer: "#slider-tools-2",
    });

  






});