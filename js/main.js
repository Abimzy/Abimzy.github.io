//   document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems, options);
//   });

// Or with jQuery

//Options for carousel
$(document).ready(function () {
    $('.carousel').carousel();
})

var instance = M.Carousel.getInstance(elem);
instance.next();
instance.next(3);
instance.prev();
instance.prev(3);


// <div class="carousel">
//           <a class="carousel-item" href="#one!" style="z-index: -1; opacity: 0.6; visibility: visible; transform: translateX(-12.5px) translateY(100px) translateX(-200px) translateZ(-200px);">
//             <img src="https://lorempixel.com/250/250/nature/1">
//           </a>
//           <a class="carousel-item active" href="#two!" style="transform: translateX(-12.5px) translateY(100px) translateX(0px) translateX(0px) translateZ(0px); z-index: 0; opacity: 1; visibility: visible;">
//             <img src="https://lorempixel.com/250/250/nature/2">
//           </a>
//           <a class="carousel-item" href="#three!" style="transform: translateX(-12.5px) translateY(100px) translateX(200px) translateZ(-200px); z-index: -1; opacity: 0.6; visibility: visible;">
//             <img src="https://lorempixel.com/250/250/nature/3">
//           </a>
//           <a class="carousel-item" href="#four!" style="transform: translateX(-12.5px) translateY(100px) translateX(400px) translateZ(-400px); z-index: -2; opacity: 0.2; visibility: visible;">
//             <img src="https://lorempixel.com/250/250/nature/4">
//           </a>
//           <a class="carousel-item" href="#five!" style="transform: translateX(-12.5px) translateY(100px) translateX(-400px) translateZ(-400px); z-index: -2; opacity: 0.2; visibility: visible;">
//             <img src="https://lorempixel.com/250/250/nature/5">
//           </a>
//         </div>

//         style="
//         z-index: -1; 
//         opacity: 0.6; 
//         visibility: visible; 
//         transform: translateX(-12.5px) translateY(100px) translateX(-200px) translateZ(-200px);