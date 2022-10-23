const btnHamburger = document.querySelector('#buttonHamburger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const fadeElems = document.querySelectorAll('.has-fade')

btnHamburger.addEventListener('click', function () { //close Hamburger menu
    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    } else { //open Hamburger menu
        body.classList.add('noscroll')
        header.classList.add('open');
        fadeElems.forEach(function (element) {
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
    }
});