<template>
  <section id="testimonios">
    <span class="leyend">- Testimonios</span>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <Carousel
            :per-page="1"
            :navigationEnabled="true"
            :mouse-drag="true"
            :autoplay="true"
            :loop="true"
          >
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
            <Slide>
              <div class="testimonio">
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.</p>
              </div>
              <p>Paciente con ansiedad,<br> 1 año de tratamiento</p>
              <a href="#" class="btns">Conoce más testimonios... <span class="icon-arrow-right"></span> </a>
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>
    <div class="gradient-a"></div>
  </section>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  components: {
    Carousel,
    Slide
  }
}
</script>
