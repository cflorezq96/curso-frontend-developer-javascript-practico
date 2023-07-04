const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

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
iconMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);


function toggleDesktopMenu() {
    console.log('Click'); // esto es para ver que si funciona hacer click
    
    // const isAsideClosed = aside.classList.contains('inactive');
    // if (!isAsideClosed) {
    //     aside.classList.add('inactive');
            // si está abierto, lo cierro
    // }
    // esta parte es para ocultar algún evento que este abierto cuando se vaya abrir otro evento... y no queden los dos sobrepuestos
    // pero hay una mejor forma, por eso comentaré todos estos condicionales
    
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleMobileMenu() {

    // const isAsideClosed = aside.classList.contains('inactive');
    // if (!isAsideClosed) {
    //     aside.classList.add('inactive');
            // si está abierto, lo cierro
    // }
    // esta parte es para ocultar algún evento que este abierto cuando se vaya abrir otro evento... y no queden los dos sobrepuestos

    mobileMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}

function toggleCarritoAside() {
    // const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    // const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // if (!isMobileMenuClosed) {
    //     mobileMenu.classList.add('inactive');
            // si está abierto, lo cierro
    // }
    // else if (!isDesktopMenuClosed) {
    //     desktopMenu.classList.add('inactive');
            // si está abierto, lo cierro
    // }
    // esta parte es para ocultar algún evento que este abierto cuando se vaya abrir otro evento... y no queden los dos sobrepuestos
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}