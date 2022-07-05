/* start slider */
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/*end slider */

/*start sticky navbar */
window.addEventListener("scroll" , function(){

    var navbar = document.querySelector("nav");
    navbar.classList.toggle("sticky" , window.scrollY > 0);
  


})


/*end sticky navbar */

$(function(){

  $('.vid').fitVids();


});
/*start fitvid code */ 






