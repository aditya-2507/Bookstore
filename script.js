searchform=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>{
    searchform.classList.toggle('active')
}
let loginform=document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick=()=>{
    loginform.classList.toggle('active')
}

document.querySelector('#close-login-btn').onclick=()=>{
    loginform.classList.remove('active')
}

window.onscroll=()=>{
    searchform.classList.remove('active')
    if(window.scrollY>80){
        document.querySelector('.header .header-2').classList.add('actie');}
        else{
            document.querySelector('.header .header-2').classList.remove('actie');}  
        }
        const bookSlider = new Swiper(".book-slider", {
            loop:true,
            centeredSlides:true,
            autoplay:{
                delay:2000,
                disableOnInteraction:false,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,

              },
            },
          });
          var featuredSlider = new Swiper(".featured-slider", {
            spaceBetween:10,
            loop:true,
            centeredSlides:true,
            autoplay:{
                delay:5000,
                disableOnInteraction:false,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,

              },
            
              1024: {
                slidesPerView: 4,

              },
            },
          });
      
        
      
        
          