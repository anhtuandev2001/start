var menuMobile = document.querySelector('.menu__mobile');
var menus = document.querySelector('.menus');
var menuMobileList = document.querySelector('.menu__mobile-list');
var iconClose = document.querySelector('.icon-close');
var menuImg = document.querySelector('.menu__img');

menuMobile.onclick = function(){
    var menuText =  menus.innerHTML;
    menuMobileList.innerHTML = menuText;
    menuMobileList.style.transition = ' all 0.3s ease-in-out'
    menuMobileList.classList.toggle("menu__mobile-list--active")
    iconClose.classList.toggle("hide-on-m")
    menuImg.classList.toggle("hide-on-m")
}