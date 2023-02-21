const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const menuImg = $('.menu__img');
const menuMobileList = $('.menu__mobile-list');
const menuMobileContainer = $('.menu__mobile-container');
const iconClose = $('.icon-close');
const overlay = $('.overlay')

const toggleElement = (element,classToggle) => {
    const e = $(`.${element}`);
    const className = $(`.${classToggle}`);
    e.classList.toggle(`${classToggle}`)
}

const close = () =>{
    toggleElement('menu__mobile-container','menu__mobile-container--active')
    toggleElement('overlay','d-block')
    toggleElement('menu__img','hide-on-m')
}

menuImg.onclick = () => {
    menuMobileList.innerHTML = $('.menus').innerHTML
    menuMobileContainer.style.transition = ' all 0.3s ease-in-out'
    toggleElement('menu__mobile-container','menu__mobile-container--active')
    toggleElement('overlay','d-block')
    toggleElement('menu__img','hide-on-m')
} 

iconClose.addEventListener('click',close);
overlay.addEventListener('click',close);


