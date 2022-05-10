let menu = document.querySelector('#menu');
let navbar = document.querySelector('.header__list');

menu.onclick = function(){
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}
window.scroll = function(){
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}
const scr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset:true
})
scr.reveal('.home__text',{delay:200,origin: 'top'});
scr.reveal('.form__home form',{delay:600,origin: 'left'});
scr.reveal('.tour__text,.services__text,.about__head,.reviews__heading',{delay:600,origin: 'top'});
scr.reveal('.tour__hint .tour__hint-box',{delay:200,origin: 'top'});
scr.reveal('.services__box .box__item',{delay:200,origin: 'top'});
scr.reveal('.about__middle',{delay:200,origin: 'top'});
scr.reveal('.reviews__box',{delay:200,origin: 'top'});
scr.reveal('.newsletter',{delay:200,origin: 'bottom'});
