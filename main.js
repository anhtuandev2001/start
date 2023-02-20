var menu = document.querySelector('.menu__img');
var menus = document.querySelector('.menus');

menu.onclick = function(){
    menus.style.transition = ' all 0.5s ease-in-out'
    menus.classList.toggle("menus--active")
}