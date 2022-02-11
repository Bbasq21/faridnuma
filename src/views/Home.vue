<template>
  <div>
    <section id="banner">
      <div class="degrate-h"></div>
      <div class="degrate-a"></div>
      <h2>Hola, soy<br> Farid Numa<br> y puedo<br> ayudarte.</h2>
      <div class="dialogo">
        <img src="../assets/img/svg/form-dialog.svg" srcset="../assets/img/form-dialog.png" alt="">
        <p>Soy Médico y Psiquiatra, Master en Medicina y fisiología del sueño, experto en Inteligencia emocional y Master en Mindfulness.</p>
        <a href="#">Más sobre mi... <span class="icon-arrow-right"></span></a>
      </div>
      <img class="mascara" src="../assets/img/mask.png" alt="">
      <div class="foto"></div>
    </section>
    <section id="howCan">
      <div class="gradient-a"></div>
      <img class="left-think" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
      <span class="leyend">- Cómo puedo ayudarte</span>
        <div class="container">
          <div class="row">
          <div class="col-12 col-md-6">
            <p>Tenemos muchas facilidades, pero cada vez vemos todo más complicado, tenemos más información, pero también más pensamientos y más ansiedad, vemos más, pero observamos menos.</p>
            <p>Cada vez somos menos pacientes, porque nos acostumbramos a la inmediatez.</p>
            <p>Ahora es más fácil comunicarnos, pero más difícil entendernos.</p>
          </div>
        </div>
      </div>
      <img class="top-one" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
      <img class="top-two" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
      <img class="top-tree" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
      <img class="top-four" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
      <img class="top-five" src="../assets/img/svg/thinking.svg" srcset="../assets/img/thinking.png" alt="">
    </section>
    <Ayudar/>
    <Eventos/>
    <section id="blog">
      <span class="leyend">- Desde el blog...</span>
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-12 col-md-5">
            <h3>Tú puedes manejar el estrés con estos simples pasos</h3>
            <span>22 de abril de 2021</span>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
            <a href="#" class="article">
              Lee el artículo completo...
              <span class="icon-arrow-right"></span>
            </a>
          </div>
          <div class="col-12 col-md-6">
            <img class="w-100" src="../assets/img/blog.png" alt="">
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img class="w-100" src="../assets/img/svg/linea.svg" alt="">
        </div>
      </div>
    </div>
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src
import Eventos from '../components/Eventos/Eventos.vue'
import Ayudar from '../components/Ayudar/Ayudar.vue'
import Carousel from '../components/Carousel/Carousel.vue'

export default {
  name: 'Home',
  components: {
    Eventos,
    Ayudar,
    Carousel
  }
}
</script>
