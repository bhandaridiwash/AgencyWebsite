//header//
let nav = document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// alert('js is working')
//nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".nav-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})
//Owl Carousel
// $(document).ready(function(){
//     $(".client-slider-section").owlCarousel({
//         items:4,
//         loop:true,
//         nav:false,
//         autoplay:true,
//         autoplayTimeout:2000,
//         autoplayHoverPause:true,
//         responsiveClass:true,
//         responsive:{
//             0:{
//                 items:2
//             },
//             600:{
//                 items:3
//             },
//             1000:{
//                 items:6
//             }
//         }
//     });
// });


//owl carousel

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

var acc = document.getElementsByClassName("accordion-flush");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.parentElement.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}