
import Swiper from '../node_modules/swiper/swiper-bundle.min.mjs';

import Navigation from '../node_modules/swiper/modules/navigation.min.mjs';
import Pagination from '../node_modules/swiper/modules/pagination.min.mjs';

/*
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

import Navigation from 'https://cdn.jsdelivr.net/npm/swiper@11/modules/navigation.min.mjs';
import Pagination from 'https://cdn.jsdelivr.net/npm/swiper@11/modules/pagination.min.mjs';
*/


const swp = document.querySelector(".swiper1");

const swp_slides = document.querySelectorAll(".swiper-slide1");

function handleResize(){
  console.log(window.screen.width < 999);

  if( window.screen.width < 999){
    swp.classList.add("swiper");
    [...swp_slides].forEach(swp_slide =>{
      swp_slide.classList.add("swiper-slide");
    })

    swiper1();
  }

  else{
    swp.classList.remove("swiper");
    [...swp_slides].forEach(swp_slide =>{
      swp_slide.classList = "";
      swp_slide.classList.add("swiper-slide1");
    })
  }
  //.log(`Новые размеры: ${window.innerWidth}x${window.innerHeight}`);
  
}

if (window.addEventListener) {
  window.addEventListener('resize', handleResize);
}
else if (window.attachEvent) {
  window.attachEvent('onresize', handleResize);
}




function swiper1(){
  const swiper = new Swiper('.swiper', {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
    },
  });
}
