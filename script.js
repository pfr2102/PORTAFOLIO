$(document).ready(function(){
    $(window).scroll(function(){
        // Agregamos la clase sticky en el class de todas las etiquetas que tengan navba ejemplo( <div class = "navbar"> --> <div class = "navbar sticky">) 
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
        // Quitamos  la clase sticky en el class de todas las etiquetas que tengan navba ejemplo(  <div class = "navbar sticky"> --> <div class = "navbar">) 
            $('.navbar').removeClass("sticky");
        }
        
        // Agregamos la clase show en el class de todas las etiquetas que tengan navba ejemplo( <div class = "scroll-up-btn"> --> <div class = "scroll-up-btn show">) 
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
        //lo mismo pero en lugar de agregarla la quitamos
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Desarrollador web", "Estudiante en ISC"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desarrollador web", "Estudiante en ISC"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-3", {
        strings: ["Java", "Python", "Java Script", "PHP", "MySQL", "HTML", "CSS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: false,
        //autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});