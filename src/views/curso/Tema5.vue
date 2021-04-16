<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 5
      .h3 Diseño del SGSI
    .row.align-items-start
      .col-12.col-lg-6
        .imagen-titulo--izq
          figure
            img(src='@/assets/curso/img1.jpg', alt='Texto que describa la imagen')
          .imagen-titulo__titulo
              .h4.m-0.text-white Diseño del SGSI
      .col-12.col-lg-6.mt-4.mt-lg-4
        p El análisis de requisitos consiste en estudiar los requisitos de seguridad de la información para el proceso SGSI bajo la normativa ISO/IEC 27001 definidos. Los requisitos son aquellas exigencias que la normativa determina para el SGSI y son susceptibles de análisis, el diseño del SGSI, abarca todos los aspectos de planeación y trazado de la ruta a seguir para la implantación del SGSI en la organización.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema5',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
