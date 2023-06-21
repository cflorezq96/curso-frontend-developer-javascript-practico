const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

// truquito 1
//Para no tener que escribir siempre (document.querySelector) podemos usar esta simplificación con una arrow function
// const $ = (selector) => document.querySelector(selector);

// const menuEmail = $('.navbar-email');
// const desktopMenu = $('.desktop-menu');


//truquito 2
// arrow founction
// const toggleMenu = () => {
//     desktopMenu.classList.toggle("inactive")
// }

// Escuchando eventos
//menuEmail.addEventListener('click',toggleMenu)


menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}