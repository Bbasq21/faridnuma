<template>
  <div>
    <section id="banner" class="ayudarte">
      <div class="degrate-h"></div>
      <div class="degrate-a" style="z-index: 1;width: 100vw;"></div>
      <h2>¿Cómo puedo<br> ayudarte?</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br> sed diam nonumy eirmod tempor.</p>
      <img class="mascara" src="../assets/img/ayudarte.png" alt="">
    </section>
    <section id="ayudarte">
        <div class="gradient-a"></div>
        <div class="container">
            <div class="row mx">
                <div class="col-12 col-md-5 txt-info">
                    <span class="step">01 /</span>
                    <h3>Conferencias</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" class="link">Conferencias <span class="icon-arrow-right"></span></a>
                </div>
                <div class="col-12 col-md-7">
                    <img class="w-100" src="../assets/img/conferencias.png" alt="">
                </div>
            </div>
            <div class="row mx">
                <div class="col-12 col-md-7">
                    <img class="w-100" src="../assets/img/talleres.png" alt="">
                </div>
                <div class="col-12 col-md-5 txt-info">
                    <span class="step">02 /</span>
                    <h3>Talleres</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" class="link">Talleres <span class="icon-arrow-right"></span></a>
                </div>
            </div>
            <div class="row mx">
                <div class="col-12 col-md-5 txt-info">
                    <span class="step">03 /</span>
                    <h3>Consultas</h3>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                    <a href="#" class="link">Consultas <span class="icon-arrow-right"></span></a>
                </div>
                <div class="col-12 col-md-7">
                    <img class="w-100" src="../assets/img/consultas.png" alt="">
                </div>
            </div>
        </div>
        <div class="gradient-b"></div>
    </section>
    <Eventos/>
    <Carousel/>
  </div>
</template>
<script>
import Eventos from '../components/Eventos/Eventos.vue'
import Carousel from '../components/Carousel/Carousel.vue'

export default {
  name: 'Ayudarte',
  components: {
    Eventos,
    Carousel
  }
}
</script>
