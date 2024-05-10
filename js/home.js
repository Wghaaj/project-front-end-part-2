$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:40,
        nav:false,
        slideBy:1,
        items:1,
    });
});

$(".nav-link").click(function(e) {
    const eventTarget =  e.target;
    const targetSelector = $(eventTarget).data('target')
    const home = document.getElementById('tab-home')

    home.classList.remove('tab-active')
    $('.nav-link').removeClass('active')
    $(eventTarget).addClass('active');

    $('.tab-pane').removeClass("active");
    $('.tab-pane').addClass("fade");
    $(targetSelector).addClass("active");
    $(targetSelector).removeClass("fade");
    
});

const scroll = document.getElementById('scroll')
const tab = document.getElementById('tab')
let click = 0

scroll.addEventListener('click', () => {
    click ++
    tab.style.display = 'none'

    if (click === 2) {
        click = 0
        tab.style.display = 'block'
    }
});

