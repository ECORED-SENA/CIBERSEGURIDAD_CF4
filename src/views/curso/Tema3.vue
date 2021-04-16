<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 3
      .h3 Definir el alcance del SGSI
    .row.align-items-start
      .col-12.col-lg-6
        p Definir el alcance para la implementación del sistema en una organización es uno de los primeros aspectos que se debe considerar. Teniendo en cuenta que existen organizaciones que difieren en tamaño por el número de empleados, volumen de información manejada, número de clientes, volúmenes de activos físicos y lógicos, número de sedes u oficinas, entre otros elementos, se hace necesario determinar qué áreas o dependencias de la organización se desea implantar el SGSI como primera medida y cuales posteriormente. Las primeras áreas que se deben considerar son aquellas que por sus funciones y responsabilidades ayudan en primera instancia a dar cumplimiento a la misión institucional.
      .col-12.col-lg-6.mt-4.mt-lg-0
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/curso/img3.png', alt='Texto que describa la imagen')
          .imagen-titulo__titulo
              .h4.m-0.text-white Alcance del SGSI

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
