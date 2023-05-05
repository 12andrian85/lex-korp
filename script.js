const openMenu = document.querySelector(".nav__btn");
const menu = document.querySelector(".nav__list");


openMenu.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("hii");
    menu.classList.toggle("nav__list--open")
});


new Splide("#slideContent", {
    type: 'loop',
    perPage: 1,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 1500,
}).mount();

