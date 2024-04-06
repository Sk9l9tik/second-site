<script>
    export default { 
        data() { 
        return { 
                isActive: false
            }; 
        }, 
        methods: { 
            toggleClass() { 
                this.isActive = !this.isActive;
                document.body.classList.toggle('no-scroll');
            } 
        } 
    } 
</script>

<template>
    <header class="header none1">
      <div class="header__top">
          <div class="container">
              <div class="row">
                  <div class="header__top-row" :class="{ mobile: isActive}"> <!--header__top-row--mobile-->
                      <a class="header_logo" href="#!">
                          <img src="../../public/header/Logo.svg" alt="Edu-Kesha">
                      </a>
  
                      <div class="header__nav">
                          <nav class="nav">
                              <ul class="nav__list">
                                  <li><a class="nav-link" href="">Возможности</a></li>
                                  <li><a class="nav-link" href="">Как это работает?</a></li>
                              </ul>
                          </nav>
                      </div>
                      <div class="header__ref">
                          <p>г Сургут, ул Базовая, д. 34, офис 10
                              <br> ОГРН 1238600001200 
                              <br> ИНН 8602309464
                          </p>
                          <p>ООО Дотсолюшн © 2023</p>
                      </div>
                      <div class="header__nav-btn">
                          <button class="nav-icon-btn">
                              <div class="nav-icon" :class="{ active: isActive }" @click="toggleClass"></div> <!--nav-icon--active-->
                          </button>
                      </div>
  
                  </div>
                </div>
            </div>
      </div>
      <div class="container">
          <div class="row">
              <div class="header_title">
                  <div class="title_info col-lg-6">
                      <h1 class="title__text">Сервис для проведения онлайн-занятий</h1>
                      <p>Проводите видеоуроки для всего</br>класса, как будто вы в школе</p>
                      <div class="header___buttons">
                          <button type="submit" class="title_header_btn-prymary">Провести урок</button>
                          <button type="submit" class="title_header_btn-secondary"><span></span>Посмотреть демо</button>
                      </div>
                  </div>
                  <div class="title_img col-lg-6">
                      <img src="../../public/header/Desktop.svg" alt="Desktop">
                  </div>
              </div>
          </div>
      </div>
  </header>
</template>

<style scoped>
</style>

<!--
export default { 
    data() { 
      return { 
            isActive: false
          }; 
      }, 
      methods: { 
          toggleClass() { 
              this.isActive = !this.isActive;
              document.body.classList.toggle('no-scroll');
          } 
      } 
  } 
-->