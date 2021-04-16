<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 2
      .h3 Plan de gestión de un SGSI
    .row.align-items-start
      .col-12.col-lg-6
        p La ISO 27001, expresa que un #[b Sistema de Gestión de la Seguridad de la información], es un sistema de gestión que comprende la política, estructura organizativa, los procedimientos, los procesos y los recursos necesarios para implantar la gestión de la seguridad de la información. Este sistema es la herramienta que dispone la dirección de las organizaciones para llevar a cabo las políticas y objetivos de seguridad (integridad, confidencialidad y disponibilidad, asignación de responsabilidad, autenticación, etc.). Este sistema proporciona mecanismos para la salvaguarda de los activos de información y de los sistemas que los procesan, en concordancia con las políticas de seguridad y planes estratégicos de la organización.
      .col-12.col-lg-6.mt-4.mt-lg-0
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/curso/img2.png', alt='Texto que describa la imagen')
          .imagen-titulo__titulo
              .h4.m-0.text-white Plan de gestión de un SGSI

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema2',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
