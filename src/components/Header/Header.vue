<template>
    <header id="header">
        <div class="container">
            <nav :class="['d-md-flex justify-content-center justify-content-md-end', {active:openmenu}]">
                <div class="col-12 col-md-3 col-lg-3">
                    <span @click="activeMenu"><router-link to="/#">Cotizaciones</router-link></span>
                    <span @click="activeMenu"><router-link to="/contactanos">Contacto</router-link></span>
                    <span @click="activeMenu"><router-link to="/#">Login <span class="icon-login"></span></router-link></span>
                </div>
            </nav>
            <div class="d-md-flex justify-content-between">
                <div class="col-8 col-md-3">
                    <img alt="FaridNuma" src="../../assets/img/svg/FaridNuma.svg" srcset="../../assets/img/FaridNuma.png">
                </div>
                <div id="nav" :class="['col-12 col-md-7 col-lg-7', {active:openmenu}]" >
                    <span @click="activeMenu"><router-link to="/">Inicio</router-link></span>
                    <span @click="activeMenu"><router-link @click="activeMenu" to="/quien-soy">Quién soy</router-link></span>
                    <span @click="activeMenu"><router-link @click="activeMenu" to="/como-puedo-ayudarte">Cómo puedo ayudarte</router-link></span>
                    <span @click="activeMenu"><router-link @click="activeMenu" to="/#">Eventos</router-link></span>
                    <span @click="activeMenu"><router-link @click="activeMenu" to="/blog">Blog</router-link></span>
                    <span @click="activeMenu"><router-link @click="activeMenu" to="/#">Goodies</router-link></span>
                </div>
            </div>
            <div :class="[{active:openmenu}, 'hamburger']" @click="activeMenu">
                <div class="_layer -top"></div>
                <div class="_layer -mid"></div>
                <div class="_layer -bottom"></div>
            </div>
        </div>
    </header>
</template>
<script>
export default {
  name: 'Header',
  data () {
    return {
      openmenu: false
    }
  },
  methods: {
    activeMenu () {
      this.openmenu = !this.openmenu
    }
  }
}
</script>
