<template>
  <div>
    <section id="banner" class="quien">
      <div class="degrate-h"></div>
      <div class="degrate-a" style="z-index: 1;width: 85vw;"></div>
      <h2>Hola, soy<br> Farid Numa</h2>
      <img class="mascara" src="../assets/img/quien-soy.png" alt="">
    </section>
    <section id="yo">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-12 col-md-6">
            <img class="dialog" src="../assets/img/svg/soy.svg" srcset="../assets/img/soy.png" alt="">
            <h3 class="soy">Soy Médico y Psiquiatra, Master en Medicina y fisiología del sueño, experto en Inteligencia emocional y Master en Mindfulness.</h3>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-8">
            <h3>“Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.”</h3>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
          </div>
        </div>
      </div>
    </section>
    <Ayudar/>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img class="w-100" src="../assets/img/svg/linea.svg" alt="">
        </div>
      </div>
    </div>
    <Eventos/>
  </div>
</template>
<script>
// @ is an alias to /src
import Ayudar from '../components/Ayudar/Ayudar.vue'
import Eventos from '../components/Eventos/Eventos.vue'

export default {
  name: 'Quien',
  components: {
    Ayudar,
    Eventos
  }
}
</script>
