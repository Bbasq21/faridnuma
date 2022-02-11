<template>
  <div>
    <section id="banner" class="blog">
        <div class="degrate-h"></div>
        <div class="degrate-a"></div>
        <h2>Colección de<br> artículos</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br> sed diam nonumy eirmod tempor.</p>
        <img class="mascara" src="../assets/img/svg/banner-blog.svg" alt="">
        <div class="forma">
            <img src="../assets/img/svg/soy.svg" srcset="../assets/img/soy.png" alt="">
            <div class="d-flex d-md-none filterby">
                <div class="filter category">
                    <h4>Categorías</h4>

                    <a href="#" class="item">Todas</a>
                    <a href="#" class="item selected">Categoria 1</a>
                    <a href="#" class="item">Categoria 2</a>
                </div>
                <div class="filter date">
                    <h4>Fecha</h4>

                    <a href="#" class="item selected">Cualquiera</a>
                    <a href="#" class="item">Agosto</a>
                    <a href="#" class="item">Junio</a>
                </div>
            </div>
        </div>
        <div class="d-md-flex d-none filterby">
            <div class="filter category">
                <h4>Categorías</h4>

                <a href="#" class="item">Todas</a>
                <a href="#" class="item selected">Categoria 1</a>
                <a href="#" class="item">Categoria 2</a>
            </div>
            <div class="filter date">
                <h4>Fecha</h4>

                <a href="#" class="item selected">Cualquiera</a>
                <a href="#" class="item">Agosto</a>
                <a href="#" class="item">Junio</a>
            </div>
        </div>
    </section>
    <section id="blogs">
        <div class="gradient-a"></div>
        <div class="container">
            <div class="row notice">
                <div class="col-12 col-md-6 info">
                    <a href="/blog/1" class="d-block">
                        <span class="date">67 de junio de 1962</span>
                        <h3>Lorem ipsum dolor sit amet, consetetur</h3>
                        <label>Categoría 1</label>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
                    </a>
                </div>
                <div class="col-12 col-md-6 img">
                    <a href="/blog/1">
                        <img class="w-100" src="../assets/img/article-1.png" alt="">
                    </a>
                </div>
            </div>
            <div class="row notice">
                <div class="col-12 col-md-6 img">
                    <img class="w-100" src="../assets/img/article-2.png" alt="">
                </div>
                <div class="col-12 col-md-6 info">
                    <span class="date">12 de agosto de 2010</span>
                    <h3>Sed ut perspiciatis unde omnis iste natus error sit.</h3>
                    <label>Categoría 1</label>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
                </div>
            </div>
            <div class="row notice">
                <div class="col-12 col-md-6 info">
                    <span class="date">67 de junio de 1962</span>
                    <h3>Lorem ipsum dolor sit amet, consetetur</h3>
                    <label>Categoría 1</label>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor.</p>
                </div>
                <div class="col-12 col-md-6 img">
                    <img class="w-100" src="../assets/img/article-1.png" alt="">
                </div>
            </div>
        </div>
        <div class="gradient-b"></div>
    </section>
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
import Eventos from '../components/Eventos/Eventos.vue'

export default {
  name: 'Blog',
  components: {
    Eventos
  }
}
</script>
