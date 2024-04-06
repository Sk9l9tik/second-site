<script setup>
const card = [
    {
        img: {
            src: "../../public/HowItWork/Schedule.svg",
            alt: "Schedule"
        },
        link: {
            href: "#", 
            title: "Составьте расписание"
        },
        description: "Выберите время, предмет и класс. Ученики получат уведомление о предстоящем уроке."
    },
    {
        img: {
            src: "../../public/HowItWork/Docs.svg",
            alt: "Docs"
        },
        link: {
            href: "#", 
            title: "Подготовьте материал"
        },
        description: "Загружайте необходимые материалы к уроку."
    },
    {
        img: {
            src: "../../public/HowItWork/Work.svg",
            alt: "Work"
        },
        link: {
            href: "#", 
            title: "Начните урок с учениками"
        },
        description: "Задавайте вопросы и вызывайте «к доске» детей с поднятой рукой."
    }
]
</script>

<template>
    <section class="how-it-work none1">
        <div class="container">
            <div class="how-it-work__title">
                <h2 class="title-2">Как это работает?</h2>
            </div>
            <div class="row">
                <div class="col-lg-4"
                    v-for="(item, index) in card"
                    :key="index">
                    <div class="how-it-work__card">
                        <img class="how-it-work__card__img" :src="item.img.src" :alt="item.img.alt">
                        <div class="how-it-work__card__text">
                            <a :href="item.link.href">{{item.link.title}}</a>
                            <p class="card__description">{{item.description}}</p>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<style>
</style>