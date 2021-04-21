<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        .h3 i
      .h3 Introducción
    .imagen.mb-4
      figure
        img(src='@/assets/curso/img5.png', alt='Texto que describa la imagen')
    p.mb-4 Los sistemas de gestión de seguridad de la información o SGSI es un término que se utiliza en la Norma Internacional ISO 27001 para referirse al conjunto de políticas, normas y controles que se aplican en una organización para garantizar el cumplimiento de los pilares de la seguridad de la información como lo son la integridad, la disponibilidad y la confidencialidad.
    p.mb-4 es el estándar internacional para la seguridad de la información que establece la especificación para un sistema de gestión de seguridad de la información (SGSI).
    p.mb-4 El enfoque de mejores prácticas del estándar del sistema de gestión de seguridad de la información ayuda a las organizaciones a gestionar su seguridad de la información dirigiéndose a las personas y los procesos, así como a la tecnología.
    p La certificación acreditada de forma independiente de la norma ISO 27001 es reconocida en todo el mundo como una indicación de que su SGSI está alineado con las mejores prácticas de seguridad de la información.

</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
