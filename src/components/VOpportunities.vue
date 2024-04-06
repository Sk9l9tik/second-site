<script setup>
  import Swiper from "swiper";
  import { Pagination, Navigation } from "swiper/modules";
  import { onMounted } from "vue";

  onMounted(() => {
    const swiper = new Swiper(".swiper", {
      modules: [Pagination, Navigation],
      direction: "horizontal",
      loop: true,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
      },
    });
  });

</script>

<template>
    <section class="opportunities none1">
        <div class="container">
            <div class="opportunities__title ">
                <h2 class="title-2">Возможности</h2>
            </div>
            <div class="row">
              <div class="swiper1">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide1 col-lg-3">
                            <div class="opportunities__card nechet">
                                <img class="card__img" src="../../public/opportunities/Chat.svg" alt="chat">
                                <h3 class="card__name">Общение с классом</h3>
                                <p class="card__description">Видеосвязь <br>
                                Чат с классом</p> 
                            </div>
                        </div>
                        <div class="swiper-slide1 col-lg-3">
                            <div class="opportunities__card chet">
                                <img class="card__img" src="../../public/opportunities/Lections.svg" alt="lection">
                                <h3 class="card__name">Проведение занятий</h3>
                                <p class="card__description">Презентация файлов<br>
                                    Демонстрация экрана</p> 
                            </div>
                        </div>
                        <div class="swiper-slide1 col-lg-3">
                            <div class="opportunities__card nechet">
                                <img class="card__img" src="../../public/opportunities/Check.svg" alt="check">
                                <h3 class="card__name">Посещаемость</h3>
                                <p class="card__description">Автоматическое <br>отслеживание <br>присутствующих</p> 
                            </div>
                        </div>
                        <div class="swiper-slide1 col-lg-3">
                            <div class="opportunities__card chet">
                                <img class="card__img" src="../../public/opportunities/Hist.svg" alt="hist">
                                <h3 class="card__name">История занятий</h3>
                                <p class="card__description">Материалы урока </p> 
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <!--<div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>-->                   
                </div>  
            </div>
            <div class="swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide col-lg-3">
                            <div class="opportunities__card nechet">
                                <img class="card__img" src="../../public/opportunities/Chat.svg" alt="chat">
                                <h3 class="card__name">Общение с классом</h3>
                                <p class="card__description">Видеосвязь <br>
                                Чат с классом</p> 
                            </div>
                        </div>
                        <div class="swiper-slide col-lg-3">
                            <div class="opportunities__card chet">
                                <img class="card__img" src="../../public/opportunities/Lections.svg" alt="lection">
                                <h3 class="card__name">Проведение занятий</h3>
                                <p class="card__description">Презентация файлов<br>
                                    Демонстрация экрана</p> 
                            </div>
                        </div>
                        <div class="swiper-slide col-lg-3">
                            <div class="opportunities__card nechet">
                                <img class="card__img" src="../../public/opportunities/Check.svg" alt="check">
                                <h3 class="card__name">Посещаемость</h3>
                                <p class="card__description">Автоматическое <br>отслеживание <br>присутствующих</p> 
                            </div>
                        </div>
                        <div class="swiper-slide col-lg-3">
                            <div class="opportunities__card chet">
                                <img class="card__img" src="../../public/opportunities/Hist.svg" alt="hist">
                                <h3 class="card__name">История занятий</h3>
                                <p class="card__description">Материалы урока </p> 
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <!--<div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>-->                   
                </div>
        </div>
    </section>
</template>

<style>
</style>