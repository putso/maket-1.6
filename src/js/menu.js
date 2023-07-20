let burgerButtonOpen = document.querySelector('.button-burger-open');
let burgerButtonClose = document.querySelector('.button-burger-close');
let buttonCallOpen = document.querySelector('.button-phone');
let buttonFeedBackOpen = document.querySelector(".button-feedback");
// let callButtonOpen = document.querySelector('')
let menu = document.querySelector('.menu-box');
// burgerButtonOpen.addEventListener('click', () => {
//     menu.classList.add('menu-box--open');
// })
// burgerButtonClose.addEventListener('click', () => {
//     menu.classList.remove('menu-box--open');
// })
let currentOpen = null;
popUp('.button-burger-close','.button-burger-open','.menu-box','menu-box--open');
popUp('.call__button-close ','.button-phone','.call-box','popup-box--open');
popUp('.feedback__button-close ','.button-feedback','.feedback-box','popup-box--open');
function popUp(closeClass,openClass,elementClass,toggleClass,childClass) {
    const closeButton = document.querySelector(closeClass);
    const openButton = document.querySelector(openClass);
    const element = document.querySelector(elementClass);
    openButton.addEventListener('click', () => {
        if(currentOpen) {
            currentOpen.element.classList.remove(currentOpen.toggleClass);
        }
        element.classList.add(toggleClass);
        currentOpen = {
            element,
            toggleClass
        }
    })
    closeButton.addEventListener('click', () => {
        element.classList.remove(toggleClass)
        currentOpen = null;
    })
}
