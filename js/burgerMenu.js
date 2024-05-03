let openButton = document.querySelector('.burger_menu_icon_open');
let closeButton = document.querySelector('.burger_menu_icon_close');
let burgerMenu = document.querySelector('.navigation_section');

function toggleMenu() {
    burgerMenu.classList.toggle('show');
    burgerMenu.classList.toggle('hide');
    openButton.style.display = burgerMenu.classList.contains('show') ? 'none' : 'block';
    closeButton.style.display = burgerMenu.classList.contains('show') ? 'block' : 'none';
}

openButton.addEventListener('click', toggleMenu);
closeButton.addEventListener('click', toggleMenu);
