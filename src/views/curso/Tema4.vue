<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 4
      .h3 Política de seguridad
    .row.align-items-start
      .col-12.col-lg-6
        p La política de seguridad es el primer documento que se debe contemplar, por cuanto es donde se especifica toda la normativa interna de la institución con el objetivo de que los funcionarios conozcan y cumplan sobre el sistema de gestión de la seguridad informática (SGSI) implantado, con este documento, también se refleja el compromiso planteado por la dirección. Así mismo contempla todos los aspectos orientados al acceso a la información, utilización de los activos físicos y lógicos de la organización y el comportamiento que debe hacer en caso de que ocurra un incidente de seguridad.
      .col-12.col-lg-6.mt-4.mt-lg-0
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/curso/img4.png', alt='Texto que describa la imagen')
          .imagen-titulo__titulo
              .h4.m-0.text-white Política de seguridad

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema4',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
