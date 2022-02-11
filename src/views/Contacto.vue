<template>
  <div>
    <section id="banner" class="contacto">
      <div class="degrate-h"></div>
      <div class="degrate-a" style="z-index: 1;width: 85vw;"></div>
      <h2>Contactame,<br> Hablemos</h2>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br> sed diam nonumy eirmod tempor.</p>
      <img class="mascara" src="../assets/img/contacto.png" alt="">
    </section>
    <section id="contacto">
        <div class="gradient-a"></div>
        <div class="container">
            <div class="row formulario">
                <div class="col-12 col-md-5 find">
                    <h4>Encuéntrame</h4>
                    <div class="info-contact">
                        <p><span class="icon-gps"></span> Medellín, Colombia</p>
                        <p><span class="icon-phone"></span> (+57) 123 4567</p>
                        <p><span class="icon-cellphone"></span> (+57) 123 456 7891</p>
                    </div>
                    <h4>Escríbeme</h4>
                    <div class="forms">
                        <input class="field" type="text" placeholder="Tu nombre">
                        <input class="field" type="email" placeholder="Tu email">
                        <textarea placeholder="Escribe tu cometario..."></textarea>
                        <button>Enviar <span class="icon-arrow-right"></span></button>
                    </div>
                </div>
                <div class="col-12 col-md-7 mapa">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126916.74073834557!2d-75.65125209709198!3d6.24419882131964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4428dfb80fad05%3A0x42137cfcc7b53b56!2sMedell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses-419!2sco!4v1636778121986!5m2!1ses-419!2sco" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>
<script>

export default {
  name: 'Contacto'
}
</script>
