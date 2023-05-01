
new Splide("#slideContent", {
    type: 'loop',
    perPage: 1,
    arrow: false,
    pagination: true,
    autoplay: true,
    interval: 1000,
}).mount();

// new Splide("#image-carousel", {
//     mediaQuery: 'min',
//     perPage: 1,
//     breakpoints: {
//         768: {
//             perPage: 2,
//             gap: '3px',
//         },
//         1201: {
//             perPage: 3,
//         },
//         1500: {
//             perPage: 4,
//             gap: '3px',
//         },
//     },
//     arrows: false,
//     pagination: true,
//     autoplay: false,
//     interval: 2000,
// }).mount();
