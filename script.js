const navbar = document.querySelector('.nav');
document.querySelector('#sub-bars').onclick = (e) => {
    navbar.classList.add('active');
    e.preventDefault();
// close navbar
document.querySelector('#close').onclick = (e) => {
    navbar.classList.remove('active')
    e.preventDefault();
}
}
// navbar search from start
const searchF = document.querySelector('.search-form');
const searchB = document.querySelector('#search-box');
    document.querySelector('#search-btn').onclick = (e) => {
        searchF.classList.toggle('active');
        searchB.focus();
        e.preventDefault();
    }
// navbar search from end
// navbar shopping cart start
const shoppingC = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = (e) => {
    shoppingC.classList.add('active');
    e.preventDefault();
    document.querySelector('.closecart-btn').onclick = (e) => {
        shoppingC.classList.remove('active');
    }
}
// navbar shopping cart end

// navbar active
const navbarActive = document.querySelector('.nav').querySelectorAll('a');
navbarActive.forEach(element => {
    element.addEventListener('click', function() {
        navbarActive.forEach(nav=>nav.classList.remove('active'))
        this.classList.add('active');
    });
});
// blod producr
const imgShoes = document.querySelector('.shoes-box img'),
        item1 = document.querySelector('#item1'),
        item2 = document.querySelector('#item2'),
        item3 = document.querySelector('#item3');

    item1.addEventListener('click', () => {
        imgShoes.src = "./img/black.png";
    });
    item2.addEventListener('click', () => {
        imgShoes.src = "./img/blue.png";
    });
    item3.addEventListener('click', () => {
        imgShoes.src = "./img/abu.png";
    });

// item box acrive 
const box = document.querySelector('.shoes-item').querySelectorAll('.item-box');
box.forEach(element => {
    element.addEventListener('click', function() {
        box.forEach(box=>box.classList.remove('active'))
        this.classList.add('active');
    });
});