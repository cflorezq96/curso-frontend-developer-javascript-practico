const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const iconMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productDetailCloseIcon = document.querySelector('.product-detail-close');
//const aside = document.querySelector('.product-detail');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const productDetailContainer = document.querySelector('#productDetail');
const cardsContainer = document.querySelector('.cards-container');

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
productDetailCloseIcon.addEventListener('click', closeProductDetailAside);



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
    shoppingCartContainer.classList.add('inactive');
}

function toggleMobileMenu() {

    // const isAsideClosed = aside.classList.contains('inactive');
    // if (!isAsideClosed) {
    //     aside.classList.add('inactive');
            // si está abierto, lo cierro
    // }
    // esta parte es para ocultar algún evento que este abierto cuando se vaya abrir otro evento... y no queden los dos sobrepuestos

    mobileMenu.classList.toggle('inactive');
    shoppingCartContainer.classList.add('inactive');
    closeProductDetailAside(); //llamamos para funcion para que se cierre el detalle del producto cuando vayamos a abrir el menu (en mobile)
}

function toggleCarritoAside() {
//     const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
//     const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
//     if (!isMobileMenuClosed) {
//         mobileMenu.classList.add('inactive');
//             //si está abierto, lo cierro
//     }
//     else if (!isDesktopMenuClosed) {
//         desktopMenu.classList.add('inactive');
//             //si está abierto, lo cierro
//     }
//     // esta parte es para ocultar algún evento que este abierto cuando se vaya abrir otro evento... y no queden los dos sobrepuestos
    
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productDetailContainer.classList.add('inactive');
    shoppingCartContainer.classList.toggle('inactive');
}

function openProductDetailAside() {
        shoppingCartContainer.classList.add('inactive');

        productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside() {
        productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
        name: 'Bike',
        price: 120,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
        name: 'Pantalla',
        price: 220,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
        name: 'Computador',
        price: 620,
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

function renderProducts(array) {
        for (product of array) {
                const productCard = document.createElement('div');
                productCard.classList.add('product-card');
        
                const productImg = document.createElement('img');
                // product={name, price, image} -> product.image
                productImg.setAttribute('src', product.image);
                //productImg.addEventListener('click', console.log); con ese .addeventlistener se ejecuta lo que se quiera, en este caso un console.loog
                productImg.addEventListener('click', openProductDetailAside);
        
                const productInfo = document.createElement('div');
                productInfo.classList.add('product-info');
        
                const productInfoDiv = document.createElement('div');
        
                const productPrice = document.createElement('p');
                productPrice.innerText = '$' + product.price;
        
                const productName = document.createElement('p');
                productName.innerText = product.name;
        
                //productInfoDiv.appendChild(productPrice);
                //productInfoDiv.appendChild(productName);
                //Con Element.append() podemos agregar varios nodos y texto mientras que con Element.appendChild() solo podemos agregar un nodo.
                productInfoDiv.append(productPrice, productName);
        
                const productInfoFigure = document.createElement('figure');
                const productImgCart = document.createElement('img');
                productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg'); // tener en cuenta que el JS debe estar en la misma carpeta que el index, para que la ruta de la imagen pueda funcionar
        
                productInfoFigure.appendChild(productImgCart);
        
                productInfo.appendChild(productInfoDiv);
                productInfo.appendChild(productInfoFigure);
        
                productCard.appendChild(productImg);
                productCard.appendChild(productInfo);
        
                cardsContainer.appendChild(productCard);
        }
}

renderProducts(productList);